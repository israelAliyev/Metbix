package com.backend.services;

import com.backend.pojos.*;
import com.backend.repositories.RepositoryProducts;
import org.codehaus.jettison.json.JSONException;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ServiceProducts {


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
                                                  String model ,List<ProductsColors> apparelProductsColors,
                                                  List<ApparelGenderAgeRange> apparelGenderAgeRanges,
                                                  List<ApparelSize> apparelSizes,
                                                  List<ApparelFabricType> apparelFabricTypes,
                                                  List<ProductsColors> automativeProductsColors,
                                                  List<AutomotiveMaxSpeed> automotiveMaxSpeeds,
                                                  List<AutomotiveFuel> automotiveFuels,
                                                  List<AutomotiveSeat> automotiveSeats,
                                                  List<AutomotiveType> automotiveTypes,
                                                  List<AutomotiveCrash> automotiveCrashes,
                                                  List<AutomotiveDistanceTraveled> automotiveDistanceTraveleds,
                                                  List<AutomotiveEngine> automotiveEngines,
                                                  List<ProductsColors> electronicsProductsColors,
                                                  List<ElectronicsMemory> electronicsMemories,
                                                  List<ElectronicsCamera> electronicsCameras,
                                                  List<ElectronicsFrontCamera> electronicsFrontCameras,
                                                  List<ElectronicsWirelessCarrier> electronicsWirelessCarriers,
                                                  List<ElectronicsOperatingSystem> electronicsOperatingSystems,
                                                  List<ElectronicsScreenSize> electronicsScreenSizes,
                                                  List<ElectronicsDisplayType> electronicsDisplayTypes,
                                                  List<ElectronicsCellularTechnology> electronicsCellularTechnologies,
                                                  List<ElectronicsBattery> electronicsBatteries,
                                                  List<ElectronicsProcessor> electronicsProcessors,
                                                  List<ElectronicsRam> electronicsRams,
                                                  List<ElectronicsGraphicsCard> electronicsGraphicsCards,
                                                  List<ElectronicsComputerType> electronicsComputerTypes,
                                                  List<MusicInstrument> musicInstruments, Pageable pageable);

     long getProductRating(Integer id);

     void productEvaluate(Integer id, Integer rating);

    void addProductRequestCount(Integer id);

    List<Products> getTopRequestProducts();


}
