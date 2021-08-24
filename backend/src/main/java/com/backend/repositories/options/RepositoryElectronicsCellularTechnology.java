package com.backend.repositories.options;

import com.backend.pojos.ElectronicsCellularTechnology;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsCellularTechnology extends JpaRepository<ElectronicsCellularTechnology , Long> {
}
