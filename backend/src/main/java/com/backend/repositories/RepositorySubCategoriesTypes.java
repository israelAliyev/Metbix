package com.backend.repositories;

import com.backend.pojos.ProductsSubcategories;
import com.backend.pojos.ProductsSubcategoriesType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorySubCategoriesTypes  extends JpaRepository<ProductsSubcategoriesType, Long> {
}
