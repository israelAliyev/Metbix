package com.backend.controller;

import com.backend.dtos.ProductsFilterRequest;
import com.backend.dtos.ProductsSearchRequest;
import com.backend.pojos.Products;
import com.backend.services.ServiceProducts;
import lombok.AllArgsConstructor;
import org.codehaus.jettison.json.JSONException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("products")
@AllArgsConstructor
@CrossOrigin("*")
public class ControllerProducts {

    private final ServiceProducts serviceProducts;

    @GetMapping("/product-info/{id}")
    public Products getProductInfo(@PathVariable(name = "id") Long productId) {

        return serviceProducts.getProductInfo(productId);
    }

    @GetMapping("/search")
    public List<Products> findProductsWithSearch(@RequestBody ProductsSearchRequest productsSearchRequest) {

        Sort sort = Sort.by(productsSearchRequest.getDirection().equals("ASC") ?
                        Direction.ASC : Direction.DESC
                , productsSearchRequest.getSortBy());
        Pageable pageable = PageRequest.of(productsSearchRequest.getPageNumber(), productsSearchRequest.getPageSize(), sort);

        List<Products> productsList = serviceProducts.getProductsWithSearchingFilter(
                productsSearchRequest.getKeyword(), productsSearchRequest.getReview(), productsSearchRequest.getStatus(), productsSearchRequest.getWarranty(),
                productsSearchRequest.getDomestic(), productsSearchRequest.getInternational(), productsSearchRequest.getYear(),
                productsSearchRequest.getMinPrice(), productsSearchRequest.getMaxPrice(), pageable);

        return productsList;
    }


    @GetMapping("/findByCategory")
    public List<Products> findProductsWithCategoryFilter(@RequestBody ProductsFilterRequest productsFilterRequest) {

        Sort sort = Sort.by(productsFilterRequest.getDirection().equals("ASC") ?
                        Direction.ASC : Direction.DESC
                , productsFilterRequest.getSortBy());
        Pageable pageable = PageRequest.of(productsFilterRequest.getPageNumber(), productsFilterRequest.getPageSize(), sort);

        List<Products> productsList = serviceProducts.getProductsWithCategoryFilter(
                productsFilterRequest.getCategory(),
                productsFilterRequest.getReview(),
                productsFilterRequest.getStatus(),
                productsFilterRequest.getWarranty(),
                productsFilterRequest.getDomestic(),
                productsFilterRequest.getInternational(),
                productsFilterRequest.getYear(),
                productsFilterRequest.getMinPrice(),
                productsFilterRequest.getMaxPrice(),
                productsFilterRequest.getBrand(),
                productsFilterRequest.getModel(),

                productsFilterRequest.getApparelProductsColors(),
                productsFilterRequest.getApparelGenderAgeRanges(),
                productsFilterRequest.getApparelSizes(),
                productsFilterRequest.getApparelFabricTypes(),
                productsFilterRequest.getAutomativeProductsColors(),
                productsFilterRequest.getAutomotiveMaxSpeeds(),
                productsFilterRequest.getAutomotiveFuels(),
                productsFilterRequest.getAutomotiveSeats(),
                productsFilterRequest.getAutomotiveTypes(),
                productsFilterRequest.getAutomotiveCrashes(),
                productsFilterRequest.getAutomotiveDistanceTraveleds(),
                productsFilterRequest.getAutomotiveEngines(),
                productsFilterRequest.getElectronicsProductsColors(),
                productsFilterRequest.getElectronicsMemories(),
                productsFilterRequest.getElectronicsCameras(),
                productsFilterRequest.getElectronicsFrontCameras(),
                productsFilterRequest.getElectronicsWirelessCarriers(),
                productsFilterRequest.getElectronicsOperatingSystems(),
                productsFilterRequest.getElectronicsScreenSizes(),
                productsFilterRequest.getElectronicsDisplayTypes(),
                productsFilterRequest.getElectronicsCellularTechnologies(),
                productsFilterRequest.getElectronicsBatteries(),
                productsFilterRequest.getElectronicsProcessors(),
                productsFilterRequest.getElectronicsRams(),
                productsFilterRequest.getElectronicsGraphicsCards(),
                productsFilterRequest.getElectronicsComputerTypes(),
                productsFilterRequest.getMusicInstruments(), pageable);

        return productsList;
    }


    @GetMapping("/rating/{id}")
    public ResponseEntity<String> getProductRating(@PathVariable Long id) throws JSONException {

        return serviceProducts.getProductRating(id);
    }

    @PostMapping("/evaluate/{id}/{rating}/{reviewTitle}/{reviewDescription}/{accountType}/{accountID}")
    public void productEvaluate(@PathVariable Long id, @PathVariable Integer rating, @PathVariable String reviewTitle, @PathVariable String reviewDescription, @PathVariable String accountType, @PathVariable Long accountID) {
        serviceProducts.productEvaluate(id, rating, reviewTitle, reviewDescription, accountType, accountID);
    }

    @GetMapping("/topRequestedProducts")
    public List<Products> getTopRequestedProducts() {

        return serviceProducts.getTopRequestProducts();
    }


    @PostMapping("/addProductRequestCount/{id}")
    public void addProductRequestCount(@PathVariable Long id) {

       serviceProducts.addProductRequestCount(id);
    }

}
