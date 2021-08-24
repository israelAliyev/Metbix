package com.backend.repositories.options;

import com.backend.pojos.AutomotiveFuel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryAutomotiveFuel extends JpaRepository<AutomotiveFuel , Long>{
}
