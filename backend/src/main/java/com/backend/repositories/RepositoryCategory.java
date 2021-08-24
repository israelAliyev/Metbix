package com.backend.repositories;

import com.backend.pojos.ProductsCategories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryCategory extends JpaRepository<ProductsCategories , Long> {
}
