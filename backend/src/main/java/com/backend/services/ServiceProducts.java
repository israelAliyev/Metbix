package com.backend.services;

import com.backend.dtos.request.AddProductRequest;
import com.backend.dtos.request.EvaluateProductRequest;
import com.backend.dtos.request.ProductsFilterRequest;
import com.backend.dtos.response.ProductsListResponse;
import com.backend.pojos.*;
import org.codehaus.jettison.json.JSONException;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Set;

public interface ServiceProducts {

    Products getProductInfo(Long productId);

    Boolean productExistInBasketByAccountEmail(Long id, String email);

    void addBasketProduct(String email, Long productId);

    void removeBasketProduct(String email, Long productId);

    Set<Products> getUserBasketProducts(String email);

    Set<Products> getCompanyBasketProducts(String email);

    String whichAccountExistByEmail(String email);

    List<Products> getProductsBySearchKeyword(String keyword);

    List<Products> getProductsByCategoryId(Long categoryId);

    List<Products> getProductsByDepartmentId(Long departmentId);

    List<Products> getProductsFilter(ProductsFilterRequest productsFilterRequest);

    void productEvaluate(EvaluateProductRequest evaluateProductRequest);

    List<Products> getTopRequestProducts();

    List<Products> getTopLikedProducts();

    void addProduct(AddProductRequest addProductRequest);

    Set<Products> getUserProductsInStock(String email);

    Set<Products> getCompanyProductsInStock(String email);

    void removeProductById(Long id);


}
