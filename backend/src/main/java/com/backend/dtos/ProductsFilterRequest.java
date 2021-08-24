package com.backend.dtos;

import com.backend.pojos.*;
import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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


    private Set<ProductsColors> apparelProductsColors = new HashSet<ProductsColors>();


    private Set<ApparelGenderAgeRange> apparelGenderAgeRanges = new HashSet<ApparelGenderAgeRange>();


    private Set<ApparelSize> apparelSizes = new HashSet<ApparelSize>();


    private Set<ApparelFabricType> apparelFabricTypes = new HashSet<ApparelFabricType>();


    private Set<ProductsColors> automativeProductsColors = new HashSet<ProductsColors>();


    private Set<AutomotiveMaxSpeed> automotiveMaxSpeeds = new HashSet<AutomotiveMaxSpeed>();


    private Set<AutomotiveFuel> automotiveFuels = new HashSet<AutomotiveFuel>();

    private Set<AutomotiveSeat> automotiveSeats = new HashSet<AutomotiveSeat>();


    private Set<AutomotiveType> automotiveTypes = new HashSet<AutomotiveType>();


    private Set<AutomotiveCrash> automotiveCrashes = new HashSet<AutomotiveCrash>();


    private Set<AutomotiveDistanceTraveled> automotiveDistanceTraveleds = new HashSet<AutomotiveDistanceTraveled>();


    private Set<AutomotiveEngine> automotiveEngines = new HashSet<AutomotiveEngine>();


    private Set<ProductsColors> electronicsProductsColors = new HashSet<ProductsColors>();


    private Set<ElectronicsMemory> electronicsMemories = new HashSet<ElectronicsMemory>();


    private Set<ElectronicsCamera> electronicsCameras = new HashSet<ElectronicsCamera>();

    private Set<ElectronicsFrontCamera> electronicsFrontCameras = new HashSet<ElectronicsFrontCamera>();

    private Set<ElectronicsWirelessCarrier> electronicsWirelessCarriers = new HashSet<ElectronicsWirelessCarrier>();

    private Set<ElectronicsOperatingSystem> electronicsOperatingSystems = new HashSet<ElectronicsOperatingSystem>();

    private Set<ElectronicsScreenSize> electronicsScreenSizes = new HashSet<ElectronicsScreenSize>();

    private Set<ElectronicsDisplayType> electronicsDisplayTypes = new HashSet<ElectronicsDisplayType>();

    private Set<ElectronicsCellularTechnology> electronicsCellularTechnologies = new HashSet<ElectronicsCellularTechnology>();

    private Set<ElectronicsBattery> electronicsBatteries = new HashSet<ElectronicsBattery>();

    private Set<ElectronicsProcessor> electronicsProcessors = new HashSet<ElectronicsProcessor>();

    private Set<ElectronicsRam> electronicsRams = new HashSet<ElectronicsRam>();

    private Set<ElectronicsGraphicsCard> electronicsGraphicsCards = new HashSet<ElectronicsGraphicsCard>();

    private Set<ElectronicsComputerType> electronicsComputerTypes = new HashSet<ElectronicsComputerType>();

    private Set<MusicInstrument> musicInstruments = new HashSet<MusicInstrument>();



}
