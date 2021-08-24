package com.backend.dtos;

import com.backend.pojos.*;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class AddProductRequest {

    private Float productPrice;

    private Integer productOldPrice;

    private Float productWeight;

    private String productShortDesc;

    private String productLongDesc;

    private String productCoverPhoto;

    private java.sql.Timestamp productUpdateDate;

    private java.sql.Timestamp productCreateDate;

    private String productStatus;

    private Boolean productWarranty = null;

    private Boolean productDomesticShipping;

    private Boolean productInternationalShipping;

    private Integer productYear;

    private String productCurrency;




    private Set<ProductsPictures> productsPictures = new HashSet<ProductsPictures>();

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


    private ProductsJobOptions productsJobOptions;

    private ProductsHomeOptions productsHomeOptions;


    private ProductsCategories productCategory;

    private ProductsDepartments productDepartment;


    private ProductsBrands productBrand;

    private ProductsModels productModel;


    private Long userID;

    private Long companyID;

}
