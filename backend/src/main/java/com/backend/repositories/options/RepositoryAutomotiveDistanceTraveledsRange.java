package com.backend.repositories.options;

import com.backend.pojos.AutomotiveDistanceTraveledRange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepositoryAutomotiveDistanceTraveledsRange extends JpaRepository<AutomotiveDistanceTraveledRange, Long> {



    @Query("select a from AutomotiveDistanceTraveledRange a where a.categoryId =:categoryId")
    List<AutomotiveDistanceTraveledRange> getDistanceTraveledRangeWithCategory(@Param("categoryId") Long categoryId);

}
