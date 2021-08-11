package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products_categories")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsCategories {
    @Id
    @Column(name = "Category_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;

    @Column(name = "Category_Name")
    private String categoryName;

    @JoinColumn(name = "Department_ID")
    @ManyToOne(fetch = FetchType.LAZY ,targetEntity = ProductsDepartments.class)
    private ProductsDepartments department;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class , mappedBy = "productCategory")
    private List<Products> products;


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_categories_colors",
            joinColumns = {@JoinColumn(name = "Category_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    private List<ProductsColors> productsColors;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsSubcategories.class)
    private List<ProductsSubcategories> productsSubcategories;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsSubcategoriesType.class)
    private List<ProductsSubcategoriesType> productsSubcategoriesTypes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsBrands.class)
    @JoinColumn(name="Category_ID", nullable=false)
    private List<ProductsBrands> productsBrands;








    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelGenderAgeRange.class)
    private List<ApparelGenderAgeRange> apparelGenderAgeRanges;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelSize.class)
    private List<ApparelSize> apparelSizes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelFabricType.class)
    private List<ApparelFabricType> apparelFabricTypes;


    //    products_car_options
    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    private List<ProductsColors> automativeProductsColors;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveMaxSpeed.class)
    private List<AutomotiveMaxSpeed> automotiveMaxSpeeds;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveFuel.class)
    private List<AutomotiveFuel> automotiveFuels;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveSeat.class)
    private List<AutomotiveSeat> automotiveSeats;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveType.class)
    private List<AutomotiveType> automotiveTypes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveCrash.class)
    private List<AutomotiveCrash> automotiveCrashes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveDistanceTraveled.class)
    private List<AutomotiveDistanceTraveled> automotiveDistanceTraveleds;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveEngine.class)
    private List<AutomotiveEngine> automotiveEngines;


    //    products_electronics_options
    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    private List<ProductsColors> electronicsProductsColors;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsMemory.class)
    private List<ElectronicsMemory> electronicsMemories;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsCamera.class)
    private List<ElectronicsCamera> electronicsCameras;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsFrontCamera.class)
    private List<ElectronicsFrontCamera> electronicsFrontCameras;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsWirelessCarrier.class)
    private List<ElectronicsWirelessCarrier> electronicsWirelessCarriers;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsOperatingSystem.class)
    private List<ElectronicsOperatingSystem> electronicsOperatingSystems;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsScreenSize.class)
    private List<ElectronicsScreenSize> electronicsScreenSizes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsDisplayType.class)
    private List<ElectronicsDisplayType> electronicsDisplayTypes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsCellularTechnology.class)
    private List<ElectronicsCellularTechnology> electronicsCellularTechnologies;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsBattery.class)
    private List<ElectronicsBattery> electronicsBatteries;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsProcessor.class)
    private List<ElectronicsProcessor> electronicsProcessors;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsRam.class)
    private List<ElectronicsRam> electronicsRams;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsGraphicsCard.class)
    private List<ElectronicsGraphicsCard> electronicsGraphicsCards;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsComputerType.class)
    private List<ElectronicsComputerType> electronicsComputerTypes;




    //    products_music_options
    @OneToMany(fetch = FetchType.LAZY, targetEntity = MusicInstrument.class)
    private List<MusicInstrument> musicInstruments;


    //    products_job_options
    @OneToOne(fetch = FetchType.LAZY, targetEntity = ProductsJobOptions.class)
    @JoinColumn(name="Category_ID")
    private ProductsJobOptions productsJobOptions;


    //    products_home_options
    @OneToOne(fetch = FetchType.LAZY, targetEntity = ProductsHomeOptions.class)
    @JoinColumn(name="Category_ID")
    private ProductsHomeOptions productsHomeOptions;


}
