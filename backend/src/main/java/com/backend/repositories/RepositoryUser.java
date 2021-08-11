package com.backend.repositories;

import com.backend.pojos.Products;
import com.backend.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RepositoryUser extends JpaRepository<Users, Integer> {

    @Query("FROM Users WHERE userName=:name")
    List<Users> findByUserName(@Param("name") String name);

    @Query("FROM Users WHERE userEmail=:email")
    Users findByUserEmail(@Param("email") String email);

    @Transactional
    @Modifying
    @Query("UPDATE Users u " +
            "SET u.userEmailVerified = TRUE WHERE u.userEmail = ?1")
    int enableAppUser(String email);

    @Query("Select u.products from Users u where u.userId = :id")
    List<Products> getUsersProducts(@Param("id") Long id);


}
