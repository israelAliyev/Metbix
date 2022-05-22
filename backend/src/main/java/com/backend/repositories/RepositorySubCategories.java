package com.backend.repositories;

import com.backend.pojos.ProductsSubcategories;
import com.backend.pojos.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepositorySubCategories extends JpaRepository<ProductsSubcategories, Long> {

}
