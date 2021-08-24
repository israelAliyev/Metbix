package com.backend.repositories.options;

import com.backend.pojos.ElectronicsComputerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsComputerType extends JpaRepository<ElectronicsComputerType , Long> {
}
