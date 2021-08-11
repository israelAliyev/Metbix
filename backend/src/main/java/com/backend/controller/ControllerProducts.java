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

    @GetMapping("/search")
    public List<Products> findProductsWithSearch(@RequestBody ProductsSearchRequest productsSearchRequest){

        Sort sort = Sort.by( productsSearchRequest.getDirection().equals("ASC") ?
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
    public List<Products> findProductsWithCategoryFilter(@RequestBody ProductsFilterRequest productsFilterRequest){

        Sort sort = Sort.by( productsFilterRequest.getDirection().equals("ASC") ?
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
    public long getProductRating(@PathVariable Integer id){
        return serviceProducts.getProductRating(id);
    }

    @PostMapping("/evaluate/{id}/{rating}")
    public void productEvaluate(@PathVariable Integer id, @PathVariable Integer rating){
      serviceProducts.productEvaluate(id , rating);
    }

    @GetMapping("/topRequestedProducts")
    public List<Products> getTopRequestedProducts(){

        return serviceProducts.getTopRequestProducts();
    }





}
