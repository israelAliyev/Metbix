package com.backend.repositories;

import com.backend.pojos.Products;
import com.backend.pojos.ProductsDepartments;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryDepartments extends JpaRepository<ProductsDepartments , Long> {
}
