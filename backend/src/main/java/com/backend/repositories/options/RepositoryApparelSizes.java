package com.backend.repositories.options;

import com.backend.pojos.ApparelSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryApparelSizes extends JpaRepository<ApparelSize , Long> {
}
