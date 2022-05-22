package com.backend.repositories;

import com.backend.dtos.response.ProductsListResponse;
import com.backend.pojos.Products;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
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
     List<Products> getProductsBySearchKeyword(@Param("keyword") String keyword);



    @EntityGraph(
            type = EntityGraph.EntityGraphType.FETCH,
            attributePaths = {
                    "user",
                    "company",
                    "productModel",
                    "productBrand",
                    "productReviews",
                    "productCategory",
                    "productsPictures",
                    "productDepartment",
                    "productsJobOptions",
                    "productsHomeOptions"
            }
    )
    Products findByProductId(Long id);


    @Query("SELECT p FROM Products p WHERE " +
            "p.productCategory.categoryName = :category")
     List<Products> getProductsWithCategory(@Param("category") String category, Pageable pageable);




//    @Query("SELECT p.productRating FROM Products p WHERE " +
//            "p.productId = :id")
//    Integer getProductRating(@Param("id") Long id);




//    @Query("update Products p set p.productRating = :rating where p.productId = :id")
//    void productEvaluate(@Param("id") Long id, @Param("rating") Integer rating);

    @Query("select p from Products p order by p.productRequestCount DESC")
    List<Products> getTopRequestProducts();

    @Query("select p from Products p order by p.rating DESC")
    List<Products> getTopLikedProducts();


//    @EntityGraph(
//            type = EntityGraph.EntityGraphType.FETCH,
//            attributePaths = {
//                    "productReviews",
//                    "productsJobOptions",
//                    "productsHomeOptions",
//                    "productsPictures",
//                    "user",
//                    "company",
//                    "productDepartment",
//                    "productCategory",
//                    "productBrand",
//                    "productModel"
//            }
//    )

    @Query("select p from Products p where p.productCategory.categoryId = :id")
    List<Products> getProductsByCategory(@Param("id") Long id);

    @Query("select p from Products p where p.productDepartment.departmentId = :id")
    List<Products> getProductsByDepartment(@Param("id") Long id);

    @Query("select new com.backend.dtos.response.ProductsListResponse(p.productId, p.productPrice, p.productShortDesc, p.productLongDesc, p.coverPhoto, p.rating) from Products p where p.productId = :id")
    List<ProductsListResponse> getProductsByDepartmentss(@Param("id") Long id);

}




