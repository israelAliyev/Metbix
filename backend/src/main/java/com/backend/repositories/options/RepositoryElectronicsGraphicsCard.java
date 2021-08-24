package com.backend.repositories.options;

import com.backend.pojos.ElectronicsGraphicsCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsGraphicsCard extends JpaRepository<ElectronicsGraphicsCard , Long> {
}
