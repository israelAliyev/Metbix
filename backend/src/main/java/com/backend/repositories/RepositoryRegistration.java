package com.backend.repositories;

import com.backend.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryRegistration extends JpaRepository<Users, Integer> {

}
