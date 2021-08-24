package com.backend.repositories;

import com.backend.pojos.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface RepositoryRole extends JpaRepository<Roles, Long> {


}
