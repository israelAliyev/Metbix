package com.backend.repositories;

import com.backend.pojos.Companies;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface RepositoryUser extends JpaRepository<Users, Long> {

    @Query("FROM Users WHERE userName=:name")
    List<Users> findByUserName(@Param("name") String name);


//    Optional<Users> findByUserEmail(String email);



    @Transactional
    @Modifying
    @Query("UPDATE Users u " +
            "SET u.userEmailVerified = TRUE WHERE u.userEmail = ?1")
    void enableAppUser(String email);

    @Query("Select u.products from Users u where u.userId = :id")
    List<Products> getUsersProducts(@Param("id") Long id);


    @Query("Select u from Users u left join fetch u.products left join fetch u.requestProducts left join fetch u.basketProducts where u.userId = :id")
    Users findByUserId(@Param("id") Long id);

    @Query("Select u from Users u left join fetch u.products left join fetch u.requestProducts left join fetch u.basketProducts where u.userId = :email")
    Users findByUserEmail(@Param("email") String email);

    Boolean existsByUserEmail(String email);

    @Query("Select distinct u from Users u Where u.userName Like %:name%")
    Set<Users> getByUserName(@Param("name") String name);
}
