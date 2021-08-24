package com.backend.repositories.options;

import com.backend.pojos.ApparelGenderAgeRange;
import com.backend.pojos.ProductsColors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryApparelGenderAgeRange extends JpaRepository<ApparelGenderAgeRange, Long> {

}
