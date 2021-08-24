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
public interface RepositoryCompany extends JpaRepository<Companies, Long> {


    @Query("FROM Companies WHERE companyName=:name")
    List<Companies> findByCompanyName(@Param("name") String name);

    @Query("FROM Companies WHERE companyEmail=:email")
    Companies findByCompanyEmail(@Param("email") String email);

    @Transactional
    @Modifying
    @Query("UPDATE Companies c " +
            "SET c.companyEmailVerified = TRUE WHERE c.companyEmail = ?1")
    void enableAppCompany(String email);


    @Query("Select c.products from Companies c where c.companyId = :id")
    List<Products> getComanysProducts(@Param("id") Long id);


    @Query("Select c from Companies c left join fetch " +
            "c.products left join fetch " +
            "c.requestProducts left join fetch " +
            "c.basketProducts left join fetch " +
            "c.companiesDetailsContinents left join fetch " +
            "c.companiesDetailsImagesAndVideos left join fetch " +
            "c.companiesDetailsProductionCertifications where c.companyId = :id")
    Companies findByCompanyId(Long id);

}
