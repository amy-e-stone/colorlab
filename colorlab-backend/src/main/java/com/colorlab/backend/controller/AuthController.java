package com.colorlab.backend.controller;

import com.colorlab.backend.model.User;
import com.colorlab.backend.repository.UserRepository;
import com.colorlab.backend.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {

        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already taken.");
        }

        String hashedPassword = new BCryptPasswordEncoder().encode(user.getPassword());
        user.setPassword(hashedPassword);

        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully.");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        return userRepository.findByUsername(user.getUsername())
                .map(existingUser -> {

                    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

                    if (encoder.matches(user.getPassword(), existingUser.getPassword())) {

                        String token = JwtUtil.generateToken(existingUser.getUsername());
                        return ResponseEntity.ok("Login successful. Token: " + token);

                    } else {
                        return ResponseEntity.status(401).body("Invalid password.");
                    }
                })
                .orElse(ResponseEntity.status(404).body("User not found."));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            String username = JwtUtil.validateTokenAndGetUsername(token);

            return userRepository.findByUsername(username)
                    .<ResponseEntity<?>>map(user -> ResponseEntity.ok().body(user))
                    .orElse(ResponseEntity.status(404).body("User not found."));
        }

        return ResponseEntity.status(401).body("Unauthorized");
    }

}
