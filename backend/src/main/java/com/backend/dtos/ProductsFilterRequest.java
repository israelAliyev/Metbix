package com.backend.dtos;

import com.backend.pojos.*;
import lombok.Data;

import java.util.List;

@Data
public class ProductsFilterRequest {

    private String category;
    private Integer review;
    private String status;
    private Boolean warranty;
    private Boolean domestic;
    private Boolean international;
    private Integer year;
    private Integer minPrice;
    private Integer maxPrice;
    private String brand;
    private String model;
    private String sortBy;
    private String direction;
    private Integer pageNumber;
    private Integer pageSize;
    List<ProductsColors> apparelProductsColors;
    List<ApparelGenderAgeRange> apparelGenderAgeRanges;
    List<ApparelSize> apparelSizes;
    List<ApparelFabricType> apparelFabricTypes;
    List<ProductsColors> automativeProductsColors;
    List<AutomotiveMaxSpeed> automotiveMaxSpeeds;
    List<AutomotiveFuel> automotiveFuels;
    List<AutomotiveSeat> automotiveSeats;
    List<AutomotiveType> automotiveTypes;
    List<AutomotiveCrash> automotiveCrashes;
    List<AutomotiveDistanceTraveled> automotiveDistanceTraveleds;
    List<AutomotiveEngine> automotiveEngines;
    List<ProductsColors> electronicsProductsColors;
    List<ElectronicsMemory> electronicsMemories;
    List<ElectronicsCamera> electronicsCameras;
    List<ElectronicsFrontCamera> electronicsFrontCameras;
    List<ElectronicsWirelessCarrier> electronicsWirelessCarriers;
    List<ElectronicsOperatingSystem> electronicsOperatingSystems;
    List<ElectronicsScreenSize> electronicsScreenSizes;
    List<ElectronicsDisplayType> electronicsDisplayTypes;
    List<ElectronicsCellularTechnology> electronicsCellularTechnologies;
    List<ElectronicsBattery> electronicsBatteries;
    List<ElectronicsProcessor> electronicsProcessors;
    List<ElectronicsRam> electronicsRams;
    List<ElectronicsGraphicsCard> electronicsGraphicsCards;
    List<ElectronicsComputerType> electronicsComputerTypes;
    List<MusicInstrument> musicInstruments;



}
