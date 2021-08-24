package com.backend.repositories.options;

import com.backend.pojos.ElectronicsCamera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsCamera extends JpaRepository<ElectronicsCamera , Long> {
}
