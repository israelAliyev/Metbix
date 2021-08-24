package com.backend.repositories.options;

import com.backend.pojos.AutomotiveType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryAutomotiveType extends JpaRepository<AutomotiveType , Long> {
}
