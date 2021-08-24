package com.backend.services;

import com.backend.dtos.AddProductRequest;
import com.backend.pojos.*;
import com.backend.repositories.RepositoryProducts;
import org.codehaus.jettison.json.JSONException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface ServiceProducts {

     Products getProductInfo(Long productId);


     List<Products> getProductsWithSearchingFilter(String keyword, Integer review,
                                                   String status, Boolean warranty,
                                                   Boolean domestic, Boolean international,
                                                   Integer year, Integer minPrice,
                                                   Integer maxPrice, Pageable pageable);

     List<Products> getProductsWithCategoryFilter(String category, Integer review,
                                                  String status, Boolean warranty,
                                                  Boolean domestic, Boolean international,
                                                  Integer year, Integer minPrice,
                                                  Integer maxPrice, String brand,
                                                  String model ,Set<ProductsColors> apparelProductsColors,
                                                  Set<ApparelGenderAgeRange> apparelGenderAgeRanges,
                                                  Set<ApparelSize> apparelSizes,
                                                  Set<ApparelFabricType> apparelFabricTypes,
                                                  Set<ProductsColors> automativeProductsColors,
                                                  Set<AutomotiveMaxSpeed> automotiveMaxSpeeds,
                                                  Set<AutomotiveFuel> automotiveFuels,
                                                  Set<AutomotiveSeat> automotiveSeats,
                                                  Set<AutomotiveType> automotiveTypes,
                                                  Set<AutomotiveCrash> automotiveCrashes,
                                                  Set<AutomotiveDistanceTraveled> automotiveDistanceTraveleds,
                                                  Set<AutomotiveEngine> automotiveEngines,
                                                  Set<ProductsColors> electronicsProductsColors,
                                                  Set<ElectronicsMemory> electronicsMemories,
                                                  Set<ElectronicsCamera> electronicsCameras,
                                                  Set<ElectronicsFrontCamera> electronicsFrontCameras,
                                                  Set<ElectronicsWirelessCarrier> electronicsWirelessCarriers,
                                                  Set<ElectronicsOperatingSystem> electronicsOperatingSystems,
                                                  Set<ElectronicsScreenSize> electronicsScreenSizes,
                                                  Set<ElectronicsDisplayType> electronicsDisplayTypes,
                                                  Set<ElectronicsCellularTechnology> electronicsCellularTechnologies,
                                                  Set<ElectronicsBattery> electronicsBatteries,
                                                  Set<ElectronicsProcessor> electronicsProcessors,
                                                  Set<ElectronicsRam> electronicsRams,
                                                  Set<ElectronicsGraphicsCard> electronicsGraphicsCards,
                                                  Set<ElectronicsComputerType> electronicsComputerTypes,
                                                  Set<MusicInstrument> musicInstruments

             , Pageable pageable);

    ResponseEntity<String> getProductRating(Long id) throws JSONException;

     void productEvaluate(Long id, Integer rating , String reviewTitle, String reviewDescription, String accountType, Long accountID);

    void addProductRequestCount(Long id);

    List<Products> getTopRequestProducts();

    void addProduct(AddProductRequest addProductRequest);


}
