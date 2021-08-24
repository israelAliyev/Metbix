package com.backend.repositories.options;

import com.backend.pojos.ElectronicsScreenSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsScreenSize extends JpaRepository<ElectronicsScreenSize , Long> {
}
