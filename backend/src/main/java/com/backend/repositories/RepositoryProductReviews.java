package com.backend.repositories;

import com.backend.pojos.ProductReviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.relational.core.sql.In;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryProductReviews extends JpaRepository<ProductReviews, Long> {
}
