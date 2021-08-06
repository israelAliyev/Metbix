package com.backend.repositories;

import com.backend.pojos.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryProducts extends JpaRepository<Products, Integer> {

}
