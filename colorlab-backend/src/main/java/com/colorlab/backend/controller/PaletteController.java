package com.colorlab.backend.controller;

import com.colorlab.backend.model.Palette;
import com.colorlab.backend.model.User;
import com.colorlab.backend.repository.PaletteRepository;
import com.colorlab.backend.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}

