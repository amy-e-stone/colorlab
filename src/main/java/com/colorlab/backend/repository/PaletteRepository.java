package com.colorlab.backend.repository;

import com.colorlab.backend.model.Palette;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaletteRepository extends JpaRepository<Palette, Long> {
}
