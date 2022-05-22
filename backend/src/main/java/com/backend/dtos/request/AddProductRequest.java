package com.backend.dtos.request;

import com.backend.pojos.*;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@ToString
public class AddProductRequest {

    private Float productPrice = null;

    private Float productOldPrice = null;

    private Float productWeight = null;

    private String productShortDesc = null;

    private String productLongDesc = null;

    private String productStatus = null;

    private Boolean productWarranty = null;

    private Boolean productDomesticShipping = null;

    private Boolean productInternationalShipping = null;

    private Integer productYear = null;

    private String productCurrency = null;


    private Set<ProductPictures> productsPictures = new HashSet<ProductPictures>();

    private Set<ProductsColors> apparelProductsColors = new HashSet<ProductsColors>();

    private Set<ApparelSize> apparelSizes = new HashSet<ApparelSize>();

    private Set<ApparelFabricType> apparelFabricTypes = new HashSet<ApparelFabricType>();

    private Set<ProductsColors> automotiveProductsColors = new HashSet<ProductsColors>();

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

    private ProductsJobOptions productsJobOptions = null;

    private ProductsHomeOptions productsHomeOptions = null;

    private ProductsDepartments productDepartment;

    private ProductsCategories productCategory;

    private Long productQuantity;

    private ProductsBrands productBrand;

    private ProductsModels productModel;

    private ProductsSubcategories productsSubcategories;

    private ProductsSubcategoriesType productsSubcategoriesType;

    private String accountEmail = null;


}
