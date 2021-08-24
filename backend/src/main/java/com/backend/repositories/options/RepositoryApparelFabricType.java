package com.backend.repositories.options;

import com.backend.pojos.ApparelFabricType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryApparelFabricType extends JpaRepository<ApparelFabricType, Long> {
}
