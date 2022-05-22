package com.backend.repositories.options;

import com.backend.pojos.AutomotiveDistanceTraveledRange;
import com.backend.pojos.ElectronicsBatteryRange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepositoryElectronicsBatteryRange extends JpaRepository<ElectronicsBatteryRange, Long> {

    @Query("select e from ElectronicsBatteryRange e where e.categoryId =:categoryId")
    List<ElectronicsBatteryRange> getElectronicsBatteryRangesByCategoryId(@Param("categoryId") Long categoryId);

}
