package com.backend.repositories;

import com.backend.pojos.Products;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RepositoryProducts extends JpaRepository<Products, Integer> , PagingAndSortingRepository<Products , Integer> {

    @Query("SELECT p FROM Products p WHERE " +
            "CONCAT(p.productName , p.productShortDesc, p.productLongDesc, " +
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



}




