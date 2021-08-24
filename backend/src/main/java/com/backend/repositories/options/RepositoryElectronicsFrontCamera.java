package com.backend.repositories.options;

import com.backend.pojos.ElectronicsFrontCamera;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsFrontCamera extends JpaRepository<ElectronicsFrontCamera , Long> {
}
