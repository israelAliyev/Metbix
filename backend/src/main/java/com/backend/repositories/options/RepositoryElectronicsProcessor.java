package com.backend.repositories.options;

import com.backend.pojos.ElectronicsProcessor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsProcessor extends JpaRepository<ElectronicsProcessor , Long> {
}
