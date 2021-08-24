package com.backend.repositories;

import com.backend.pojos.Products;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositoryProducts extends JpaRepository<Products, Long> , PagingAndSortingRepository<Products , Long> {

    @Query("SELECT p FROM Products p WHERE " +
            "CONCAT(p.productShortDesc, p.productLongDesc, " +
            "p.productCategory.categoryName, p.productBrand.brandName, " +
            "p.productModel.modelName, " +
            "p.productCategory.department.department) LIKE %:keyword%")
     List<Products> getProductsWithSearching(@Param("keyword") String keyword, Pageable pageable);



    @Query("SELECT p FROM Products p WHERE " +
            "p.productCategory.categoryName = :category")
     List<Products> getProductsWithCategory(@Param("category") String category, Pageable pageable);


    @Query("SELECT p.productRating FROM Products p WHERE " +
            "p.productId = :id")
    Integer getProductRating(@Param("id") Long id);




    @Query("update Products p set p.productRating = :rating where p.productId = :id")
    void productEvaluate(@Param("id") Long id, @Param("rating") Integer rating);

    @Query("select p from Products p order by p.productRequestCount DESC")
    List<Products> getTopRequestProducts();


    @Query("select distinct p from Products p left join fetch " +
            "p.productReviews left join fetch " +
            "p.apparelProductsColors left join fetch " +
            "p.apparelGenderAgeRanges left join fetch " +
            "p.apparelSizes left join fetch " +
            "p.apparelFabricTypes left join fetch " +
            "p.automativeProductsColors left join fetch " +
            "p.automotiveMaxSpeeds left join fetch " +
            "p.automotiveFuels left join fetch " +
            "p.automotiveSeats left join fetch " +
            "p.automotiveTypes left join fetch " +
            "p.automotiveCrashes left join fetch " +
            "p.automotiveDistanceTraveleds left join fetch " +
            "p.automotiveEngines left join fetch " +
            "p.electronicsProductsColors left join fetch " +
            "p.electronicsMemories left join fetch " +
            "p.electronicsCameras left join fetch " +
            "p.electronicsFrontCameras left join fetch " +
            "p.electronicsWirelessCarriers left join fetch " +
            "p.electronicsOperatingSystems left join fetch " +
            "p.electronicsScreenSizes left join fetch " +
            "p.electronicsDisplayTypes left join fetch " +
            "p.electronicsCellularTechnologies left join fetch " +
            "p.electronicsBatteries left join fetch " +
            "p.electronicsProcessors left join fetch " +
            "p.electronicsRams left join fetch " +
            "p.electronicsGraphicsCards left join fetch " +
            "p.electronicsComputerTypes left join fetch " +
            "p.musicInstruments left join fetch " +
            "p.productsJobOptions left join fetch " +
            "p.productsHomeOptions " +
//            "p.productsPictures left join fetch " +
//            "p.user left join fetch " +
//            "p.company left join fetch " +
//            "p.productBrand left join fetch " +
//            "p.productModel" +
            " where p.productId = :id")
    Products findByProductId(@Param("id") Long id);


}




