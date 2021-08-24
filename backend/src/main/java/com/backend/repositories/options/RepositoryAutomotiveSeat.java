package com.backend.repositories.options;

import com.backend.pojos.AutomotiveSeat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryAutomotiveSeat extends JpaRepository<AutomotiveSeat , Long> {
}
