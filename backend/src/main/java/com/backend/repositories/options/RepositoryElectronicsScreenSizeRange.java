package com.backend.repositories.options;

import com.backend.pojos.ElectronicsBatteryRange;
import com.backend.pojos.ElectronicsScreenSizeRange;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RepositoryElectronicsScreenSizeRange extends JpaRepository<ElectronicsScreenSizeRange, Long> {

    @Query("select e from ElectronicsScreenSizeRange e where e.categoryId =:categoryId")
    List<ElectronicsScreenSizeRange> getElectronicsScreenSizeRangesByCategoryId(@Param("categoryId") Long categoryId);

}
