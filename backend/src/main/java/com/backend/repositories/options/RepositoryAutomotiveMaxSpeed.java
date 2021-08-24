package com.backend.repositories.options;

import com.backend.pojos.AutomotiveMaxSpeed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryAutomotiveMaxSpeed extends JpaRepository<AutomotiveMaxSpeed , Long> {
}
