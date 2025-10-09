package com.colorlab.backend.controller;

import com.colorlab.backend.model.Palette;
import com.colorlab.backend.model.User;
import com.colorlab.backend.repository.PaletteRepository;
import com.colorlab.backend.repository.UserRepository;
import com.colorlab.backend.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/palettes")
public class PaletteController {

    private final PaletteRepository paletteRepository;
    private final UserRepository userRepository;

    public PaletteController(PaletteRepository paletteRepository, UserRepository userRepository) {
        this.paletteRepository = paletteRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<Palette>> getUserPalettes() {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByUsername(username).orElse(null);

        if (user == null) {
            return ResponseEntity.status(401).build(); // should not happen
        }

        List<Palette> palettes = paletteRepository.findAll().stream()
                .filter(p -> p.getUser().getId().equals(user.getId()))
                .toList();

        return ResponseEntity.ok(palettes);
    }

    @PostMapping
    public ResponseEntity<?> createPalette(@RequestBody Palette palette, HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token == null || !token.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Missing or invalid token");
        }

        String username = JwtUtil.validateTokenAndGetUsername(token.substring(7));
        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body("User not found");
        }

        palette.setUser(userOpt.get());
        paletteRepository.save(palette);
        return ResponseEntity.status(201).body(palette);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePalette(@PathVariable Long id, HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        if (token == null || !token.startsWith("Bearer ")) {
            return ResponseEntity.status(401).body("Missing or invalid token");
        }

        String username = JwtUtil.validateTokenAndGetUsername(token.substring(7));
        Optional<User> userOpt = userRepository.findByUsername(username);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(404).body("User not found");
        }

        Optional<Palette> paletteOpt = paletteRepository.findById(id);
        if (paletteOpt.isEmpty()) {
            return ResponseEntity.status(404).body("Palette not found");
        }

        Palette palette = paletteOpt.get();
        if (!palette.getUser().getId().equals(userOpt.get().getId())) {
            return ResponseEntity.status(403).body("Not authorized to delete this palette");
        }

        paletteRepository.delete(palette);
        return ResponseEntity.ok("Palette deleted successfully");
    }
}

