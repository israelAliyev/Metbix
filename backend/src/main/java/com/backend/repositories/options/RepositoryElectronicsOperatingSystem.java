package com.backend.repositories.options;

import com.backend.pojos.ElectronicsOperatingSystem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsOperatingSystem extends JpaRepository<ElectronicsOperatingSystem , Long> {
}
