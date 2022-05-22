package com.backend.repositories;

import com.backend.pojos.ProductPictures;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryProductPictures extends JpaRepository<ProductPictures , Long> {
}
