package com.backend.repositories.options;

import com.backend.pojos.ElectronicsRam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsRam extends JpaRepository<ElectronicsRam , Long> {
}
