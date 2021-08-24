package com.backend.repositories;

import com.backend.pojos.Continents;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositoryContinents extends JpaRepository<Continents , Long> {
}
