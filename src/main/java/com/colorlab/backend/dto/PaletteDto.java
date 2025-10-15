package com.colorlab.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
public class PaletteDto {
    private Long id;
    private String name;
    private List<String> colors;
    private LocalDateTime createdAt;
    private UserDto user;
}
