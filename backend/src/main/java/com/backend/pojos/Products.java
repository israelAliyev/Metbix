package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "products")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Products {
    @Id
    @Column(name = "Product_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(name = "Product_Price")
    private Float productPrice;

    @Column(name = "Product_Old_Price")
    private Integer productOldPrice;

    @Column(name = "Product_Weight")
    private Float productWeight;

    @Column(name = "Product_Short_Desc")
    @Lob
    private String productShortDesc;

    @Column(name = "Product_Long_Desc")
    @Lob
    private String productLongDesc;

    @Column(name = "Product_Cover_Photo")
    private String productCoverPhoto;

    @Column(name = "Product_Update_Date")
    private java.sql.Timestamp productUpdateDate;

    @Column(name = "Product_Create_Date")
    private java.sql.Timestamp productCreateDate;


    @Column(name = "Product_Status")
    private String productStatus;

    @Column(name = "Product_Warranty", columnDefinition = "tinyint(null) default null")
    private Boolean productWarranty = null;

    @Column(name = "Product_Domestic_Shipping", columnDefinition = "tinyint(null) default null")
    private Boolean productDomesticShipping;

    @Column(name = "Product_International_Shipping", columnDefinition = "tinyint(null) default null")
    private Boolean productInternationalShipping;

    @Column(name = "Product_Year")
    private Integer productYear;


    @Column(name = "Product_Rating")
    private Integer productRating;

    @Column(name = "Product_Evaluate_Count")
    private Integer productEvaluateCount;

    @Column(name = "Product_Request_Count")
    private Integer productRequestCount;


    @Column(name = "Product_Five_Stars")
    private Integer productFiveStars;

    @Column(name = "Product_Four_Stars")
    private Integer productFourStars;

    @Column(name = "Product_Three_Stars")
    private Integer productThreeStars;

    @Column(name = "Product_Two_Stars")
    private Integer productTwoStars;

    @Column(name = "Product_One_Star")
    private Integer productOneStar;

    @Column(name = "Product_Currency")
    private String productCurrency;

    @OneToMany(fetch = FetchType.EAGER, targetEntity = ProductsPictures.class
            , cascade = CascadeType.ALL, mappedBy = "product")
    private Set<ProductsPictures> productsPictures = new HashSet<ProductsPictures>();

    @OneToMany(fetch = FetchType.EAGER, targetEntity = ProductReviews.class, mappedBy = "product")
    private Set<ProductReviews> productReviews = new HashSet<ProductReviews>();


    @ManyToOne(fetch = FetchType.EAGER, targetEntity = Users.class)
    @JoinTable(name = "II_users_products",
            joinColumns = {@JoinColumn(
                    referencedColumnName = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(
                    referencedColumnName = "User_ID")}
    )
    private Users user;


    @ManyToOne(fetch = FetchType.EAGER, targetEntity = Companies.class)
    @JoinTable(name = "II_companies_products",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Company_ID")}
    )
    private Companies company;


    //    II_products_apparel_options
    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_products_apparel_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    private Set<ProductsColors> apparelProductsColors = new HashSet<ProductsColors>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ApparelGenderAgeRange.class)
    @JoinTable(name = "II_products_apparel_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Age_Range_ID")}
    )
    private Set<ApparelGenderAgeRange> apparelGenderAgeRanges = new HashSet<ApparelGenderAgeRange>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ApparelSize.class)
    @JoinTable(name = "II_products_apparel_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Size_ID")}
    )
    private Set<ApparelSize> apparelSizes = new HashSet<ApparelSize>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ApparelFabricType.class)
    @JoinTable(name = "II_products_apparel_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Fabric_Type_ID")}
    )
    private Set<ApparelFabricType> apparelFabricTypes = new HashSet<ApparelFabricType>();


    //    II_products_car_options
    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    private Set<ProductsColors> automativeProductsColors = new HashSet<ProductsColors>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = AutomotiveMaxSpeed.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Max_Speed_ID")}
    )
    private Set<AutomotiveMaxSpeed> automotiveMaxSpeeds = new HashSet<AutomotiveMaxSpeed>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = AutomotiveFuel.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Fuel_ID")}
    )
    private Set<AutomotiveFuel> automotiveFuels = new HashSet<AutomotiveFuel>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = AutomotiveSeat.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Seat_ID")}
    )
    private Set<AutomotiveSeat> automotiveSeats = new HashSet<AutomotiveSeat>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = AutomotiveType.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Type_ID")}
    )
    private Set<AutomotiveType> automotiveTypes = new HashSet<AutomotiveType>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = AutomotiveCrash.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Crash_ID")}
    )
    private Set<AutomotiveCrash> automotiveCrashes = new HashSet<AutomotiveCrash>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = AutomotiveDistanceTraveled.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Distance_Traveled_ID")}
    )
    private Set<AutomotiveDistanceTraveled> automotiveDistanceTraveleds = new HashSet<AutomotiveDistanceTraveled>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = AutomotiveEngine.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Engine_ID")}
    )
    private Set<AutomotiveEngine> automotiveEngines = new HashSet<AutomotiveEngine>();


    //    II_products_electronics_options
    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    private Set<ProductsColors> electronicsProductsColors = new HashSet<ProductsColors>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsMemory.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Memory_ID")}
    )
    private Set<ElectronicsMemory> electronicsMemories = new HashSet<ElectronicsMemory>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsCamera.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Camera_ID")}
    )
    private Set<ElectronicsCamera> electronicsCameras = new HashSet<ElectronicsCamera>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsFrontCamera.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Front_Camera_ID")}
    )
    private Set<ElectronicsFrontCamera> electronicsFrontCameras = new HashSet<ElectronicsFrontCamera>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsWirelessCarrier.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Wireless_Carrier_ID")}
    )
    private Set<ElectronicsWirelessCarrier> electronicsWirelessCarriers = new HashSet<ElectronicsWirelessCarrier>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsOperatingSystem.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Operating_System_ID")}
    )
    private Set<ElectronicsOperatingSystem> electronicsOperatingSystems = new HashSet<ElectronicsOperatingSystem>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsScreenSize.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Screen_Size_ID")}
    )
    private Set<ElectronicsScreenSize> electronicsScreenSizes = new HashSet<ElectronicsScreenSize>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsDisplayType.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Display_Type_ID")}
    )
    private Set<ElectronicsDisplayType> electronicsDisplayTypes = new HashSet<ElectronicsDisplayType>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsCellularTechnology.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Cellular_Technology_ID")}
    )
    private Set<ElectronicsCellularTechnology> electronicsCellularTechnologies = new HashSet<ElectronicsCellularTechnology>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsBattery.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Battery_ID")}
    )
    private Set<ElectronicsBattery> electronicsBatteries = new HashSet<ElectronicsBattery>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsProcessor.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Processor_ID")}
    )
    private Set<ElectronicsProcessor> electronicsProcessors = new HashSet<ElectronicsProcessor>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsRam.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Ram_ID")}
    )
    private Set<ElectronicsRam> electronicsRams = new HashSet<ElectronicsRam>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsGraphicsCard.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Graphics_Card_ID")}
    )
    private Set<ElectronicsGraphicsCard> electronicsGraphicsCards = new HashSet<ElectronicsGraphicsCard>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ElectronicsComputerType.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Computer_Type_ID")}
    )
    private Set<ElectronicsComputerType> electronicsComputerTypes = new HashSet<ElectronicsComputerType>();


    //    II_products_music_options
    @ManyToMany(fetch = FetchType.EAGER, targetEntity = MusicInstrument.class)
    @JoinTable(name = "II_products_music_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Instrument_ID")}
    )
    private Set<MusicInstrument> musicInstruments = new HashSet<MusicInstrument>();


    //    II_products_job_options
    @OneToOne(fetch = FetchType.EAGER, targetEntity = ProductsJobOptions.class)
    @JoinColumn(name = "Product_ID")
    private ProductsJobOptions productsJobOptions;


    //    II_products_home_options
    @OneToOne(fetch = FetchType.EAGER, targetEntity = ProductsHomeOptions.class)
    @JoinColumn(name = "Product_ID")
    private ProductsHomeOptions productsHomeOptions;


    @ManyToOne(fetch = FetchType.EAGER, targetEntity = ProductsCategories.class)
    @JoinColumn(name = "Product_Category_ID")
    private ProductsCategories productCategory;


    @ManyToOne(fetch = FetchType.EAGER, targetEntity = ProductsDepartments.class)
    @JoinColumn(name = "Department_ID")
    private ProductsDepartments productDepartment;

    @ManyToOne(fetch = FetchType.EAGER, targetEntity = ProductsBrands.class)
    @JoinColumn(name = "Product_Brand_ID")
    private ProductsBrands productBrand;


    @ManyToOne(fetch = FetchType.EAGER, targetEntity = ProductsModels.class)
    @JoinColumn(name = "Product_Model_ID")
    private ProductsModels productModel;




}