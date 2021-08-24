package com.backend.repositories;

import com.backend.pojos.Products;
import com.backend.pojos.ProductsModels;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryModels extends JpaRepository<ProductsModels , Long> {
}
