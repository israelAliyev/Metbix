package com.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Company extends CrudRepository<Products, Integer>, JpaRepository<Products, Integer> {

}
