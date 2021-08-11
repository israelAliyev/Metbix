package com.backend.repositories;

import com.backend.pojos.Companies;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RepositoryCompany extends JpaRepository<Companies, Integer> {


    @Query("FROM Companies WHERE companyName=:name")
    List<Companies> findByUserName(@Param("name") String name);

    @Query("FROM Companies WHERE companyEmail=:email")
    Companies findByUserEmail(@Param("email") String email);

    @Transactional
    @Modifying
    @Query("UPDATE Companies c " +
            "SET c.companyEmailVerified = TRUE WHERE c.companyEmail = ?1")
    int enableAppUser(String email);


    @Query("Select c.products from Companies c where c.companyId = :id")
    List<Products> getComanysProducts(@Param("id") Long id);

}
