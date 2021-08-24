package com.backend.repositories.options;

import com.backend.pojos.ElectronicsBattery;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryElectronicsBattery extends JpaRepository<ElectronicsBattery , Long> {
}
