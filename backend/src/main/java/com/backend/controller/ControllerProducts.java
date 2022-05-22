package com.backend.controller;

import com.backend.dtos.request.AddProductRequest;
import com.backend.dtos.request.EvaluateProductRequest;
import com.backend.dtos.request.ProductsFilterRequest;
import com.backend.dtos.request.ProductsSearchRequest;
import com.backend.pojos.Companies;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import com.backend.services.ServiceProducts;
import lombok.RequiredArgsConstructor;
import org.codehaus.jettison.json.JSONException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/products")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ControllerProducts {

    private final ServiceProducts serviceProducts;

    @GetMapping("/user-basket-products/{email}")
    public Set<Products> getUserBasketProducts(@PathVariable(name = "email") String email) {

        return serviceProducts.getUserBasketProducts(email);
    }

    @GetMapping("/company-basket-products/{email}")
    public Set<Products> getCompanyBasketProducts(@PathVariable(name = "email") String email) {

        return serviceProducts.getCompanyBasketProducts(email);
    }


    @GetMapping("/product-info/{id}")
    public Products getProductInfo(@PathVariable(name = "id") Long productId) {

        return serviceProducts.getProductInfo(productId);
    }

    @GetMapping("/search")
    public List<Products> getProductsBySearchKeyword(@RequestParam String keyword) {

        return serviceProducts.getProductsBySearchKeyword(keyword);
    }


    @GetMapping("/find-by-category/{id}")
    public List<Products> findProductsWithCategory(@PathVariable(name = "id") Long productId) {

        return serviceProducts.getProductsByCategoryId(productId);
    }


    @GetMapping("/find-by-department/{id}")
    public List<Products> findProductsWithDepartment(@PathVariable(name = "id") Long departmentId) {

        return serviceProducts.getProductsByDepartmentId(departmentId);
    }


    @PostMapping("/filter-products")
    public List<Products> filterProducts(@RequestBody ProductsFilterRequest productsFilterRequest) {

        return serviceProducts.getProductsFilter(productsFilterRequest);
    }



    @PostMapping("/add-basket-product")
    public void addBasketProduct(@RequestParam String email, @RequestParam Long product_id) {

        serviceProducts.addBasketProduct(email, product_id);
    }

    @PostMapping("/remove-basket-product")
    public void removeBasketProduct(@RequestParam String email, @RequestParam Long product_id) {

        serviceProducts.removeBasketProduct(email, product_id);
    }

    @PostMapping("/evaluate")
    public void productEvaluate(@RequestBody EvaluateProductRequest evaluateProductRequest) {
        serviceProducts.productEvaluate(evaluateProductRequest);
    }


    @GetMapping("/exist-in-basket-by-account-email")
    public Boolean productExistInBasketByAccountEmail(@RequestParam Long product_id, @RequestParam String email) {
        return serviceProducts.productExistInBasketByAccountEmail(product_id, email);
    }

    @GetMapping("/which-account-exist-by-email/{email}")
    public String whichAccountExistByEmail(@PathVariable String email) {

        return serviceProducts.whichAccountExistByEmail(email);
    }


    @GetMapping("/top-requested-products")
    public List<Products> getTopRequestedProducts() {

        return serviceProducts.getTopRequestProducts();
    }

    @GetMapping("/top-liked-products")
    public List<Products> getTopLikedProducts() {

        return serviceProducts.getTopLikedProducts();
    }

    @GetMapping("/get-products-by-category-id/{id}")
    public List<Products> getProductsByCategoryId(@PathVariable Long id) {

        return serviceProducts.getProductsByCategoryId(id);
    }



//    @PostMapping("/addProductRequestCount/{id}")
//    public void addProductRequestCount(@PathVariable Long id) {
//
//       serviceProducts.addProductRequestCount(id);
//    }


    @PostMapping("/addProduct")
    public void addProductRequestCount(@RequestBody AddProductRequest addProductRequest) {

        serviceProducts.addProduct(addProductRequest);
    }


    @GetMapping("/get-user-products-in-stock/{email}")
    public Set<Products> getUserProductsInStock(@PathVariable String email) {

        return serviceProducts.getUserProductsInStock(email);
    }

    @GetMapping("/get-company-products-in-stock/{email}")
    public Set<Products> getCompanyProductsInStock(@PathVariable String email) {


        return serviceProducts.getCompanyProductsInStock(email);
    }

    @PostMapping("/remove-product-by-id/{id}")
    public void removeProductById(@PathVariable Long id) {
        serviceProducts.removeProductById(id);
    }

}