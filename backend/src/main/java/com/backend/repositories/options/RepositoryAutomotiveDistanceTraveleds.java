package com.backend.repositories.options;

import com.backend.pojos.AutomotiveDistanceTraveled;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryAutomotiveDistanceTraveleds extends JpaRepository<AutomotiveDistanceTraveled , Long> {
}
