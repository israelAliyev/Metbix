package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.jersey.core.reflection.MethodList;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;



@Entity
@Table(name = "products")
@Getter
@Setter
@Cacheable
@ToString
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Products implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Product_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(name = "Product_Price")
    private Float productPrice;

    @Column(name = "Product_Old_Price")
    private Float productOldPrice;

    @Column(name = "Product_Weight")
    private Float productWeight;

    @Column(name = "Product_Short_Desc")
    @Lob
    private String productShortDesc;

    @Column(name = "Product_Long_Desc")
    @Lob
    private String productLongDesc;


    @Column(name = "Product_Create_Date")
    private LocalDateTime productCreateDate;


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


    @Column(name = "Product_Request_Count")
    private Integer productRequestCount;

    @Column(name = "Product_Quantity")
    private Long productQuantity;


    @Column(name = "Product_Currency")
    private String productCurrency;


    @Column(name = "Review_Count")
    private Long reviewCount;


    @Column(name = "Rating")
    private Float rating;

    @Column(name = "Cover_Photo")
    private String coverPhoto;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductPictures.class
            , cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE}, mappedBy = "product")
    private Set<ProductPictures> productsPictures = new HashSet<ProductPictures>();

    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductReviews.class, mappedBy = "product")
    private Set<ProductReviews> productReviews = new HashSet<ProductReviews>();



    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Users.class ,
            cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} )
    @JoinTable(name = "ii_users_products",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    private Users user;


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = Companies.class ,
            cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinTable(name = "II_companies_basket",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Company_ID")}
    )
    @JsonIgnore
    private Set<Companies> basketCompanies = new HashSet<Companies>();




    @ManyToMany(fetch = FetchType.LAZY, targetEntity = Users.class ,
            cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} )
    @JoinTable(name = "ii_users_basket",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "User_ID")}
    )
    @JsonIgnore
    private Set<Users> basketUsers = new HashSet<Users>();


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Companies.class ,
            cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinTable(name = "II_companies_products",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Company_ID")}
    )
    private Companies company;



    //    II_products_apparel_options
    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_products_apparel_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    private Set<ProductsColors> apparelProductsColors = new HashSet<ProductsColors>();




    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ApparelSize.class)
    @JoinTable(name = "II_products_apparel_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Size_ID")}
    )
    private Set<ApparelSize> apparelSizes = new HashSet<ApparelSize>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ApparelFabricType.class)
    @JoinTable(name = "II_products_apparel_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Fabric_Type_ID")}
    )
    private Set<ApparelFabricType> apparelFabricTypes = new HashSet<ApparelFabricType>();


    //    II_products_car_options
    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    private Set<ProductsColors> automativeProductsColors = new HashSet<ProductsColors>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveMaxSpeed.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Max_Speed_ID")}
    )
    private Set<AutomotiveMaxSpeed> automotiveMaxSpeeds = new HashSet<AutomotiveMaxSpeed>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveFuel.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Fuel_ID")}
    )
    private Set<AutomotiveFuel> automotiveFuels = new HashSet<AutomotiveFuel>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveSeat.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Seat_ID")}
    )
    private Set<AutomotiveSeat> automotiveSeats = new HashSet<AutomotiveSeat>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveType.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Type_ID")}
    )
    private Set<AutomotiveType> automotiveTypes = new HashSet<AutomotiveType>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveCrash.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Crash_ID")}
    )
    private Set<AutomotiveCrash> automotiveCrashes = new HashSet<AutomotiveCrash>();


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveDistanceTraveled.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Distance_Traveled_ID")}
    )
    private Set<AutomotiveDistanceTraveled> automotiveDistanceTraveleds = new HashSet<AutomotiveDistanceTraveled>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveEngine.class)
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Engine_ID")}
    )
    private Set<AutomotiveEngine> automotiveEngines = new HashSet<AutomotiveEngine>();


    //    II_products_electronics_options
    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    private Set<ProductsColors> electronicsProductsColors = new HashSet<ProductsColors>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsMemory.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Memory_ID")}
    )
    private Set<ElectronicsMemory> electronicsMemories = new HashSet<ElectronicsMemory>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsCamera.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Camera_ID")}
    )
    private Set<ElectronicsCamera> electronicsCameras = new HashSet<ElectronicsCamera>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsFrontCamera.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Front_Camera_ID")}
    )
    private Set<ElectronicsFrontCamera> electronicsFrontCameras = new HashSet<ElectronicsFrontCamera>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsOperatingSystem.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Operating_System_ID")}
    )
    private Set<ElectronicsOperatingSystem> electronicsOperatingSystems = new HashSet<ElectronicsOperatingSystem>();


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsScreenSize.class , cascade = { CascadeType.MERGE ,CascadeType.PERSIST , CascadeType.REFRESH })
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Screen_Size_ID")}
    )
    private Set<ElectronicsScreenSize> electronicsScreenSizes = new HashSet<ElectronicsScreenSize>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsDisplayType.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Display_Type_ID")}
    )
    private Set<ElectronicsDisplayType> electronicsDisplayTypes = new HashSet<ElectronicsDisplayType>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsCellularTechnology.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Cellular_Technology_ID")}
    )
    private Set<ElectronicsCellularTechnology> electronicsCellularTechnologies = new HashSet<ElectronicsCellularTechnology>();


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsBattery.class , cascade = {CascadeType.MERGE, CascadeType.PERSIST ,CascadeType.REFRESH})
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Battery_ID")}
    )
    private Set<ElectronicsBattery> electronicsBatteries = new HashSet<ElectronicsBattery>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsProcessor.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Processor_ID")}
    )
    private Set<ElectronicsProcessor> electronicsProcessors = new HashSet<ElectronicsProcessor>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsRam.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Ram_ID")}
    )
    private Set<ElectronicsRam> electronicsRams = new HashSet<ElectronicsRam>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsGraphicsCard.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Graphics_Card_ID")}
    )
    private Set<ElectronicsGraphicsCard> electronicsGraphicsCards = new HashSet<ElectronicsGraphicsCard>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsComputerType.class)
    @JoinTable(name = "II_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Computer_Type_ID")}
    )
    private Set<ElectronicsComputerType> electronicsComputerTypes = new HashSet<ElectronicsComputerType>();


    //    II_products_music_options
    @ManyToMany(fetch = FetchType.LAZY, targetEntity = MusicInstrument.class)
    @JoinTable(name = "II_products_music_options",
            joinColumns = {@JoinColumn(name = "Product_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Instrument_ID")}
    )
    private Set<MusicInstrument> musicInstruments = new HashSet<MusicInstrument>();


    //   products_job_options
    @OneToOne(fetch = FetchType.LAZY, targetEntity = ProductsJobOptions.class , cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE}, mappedBy = "product")
    private ProductsJobOptions productsJobOptions;


    //   products_home_options
    @OneToOne(fetch = FetchType.LAZY, targetEntity = ProductsHomeOptions.class , cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} , mappedBy = "product")
    private ProductsHomeOptions productsHomeOptions;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ProductsCategories.class )
    @JoinColumn(name = "Product_Category_ID")
    private ProductsCategories productCategory;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ProductsDepartments.class)
    @JoinColumn(name = "Department_ID")
    private ProductsDepartments productDepartment;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ProductsBrands.class)
    @JoinColumn(name = "Product_Brand_ID")
    private ProductsBrands productBrand;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ProductsModels.class)
    @JoinColumn(name = "Product_Model_ID")
    private ProductsModels productModel;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ProductsSubcategoriesType.class)
    @JoinColumn(name = "Sub_Category_Type_ID")
    private ProductsSubcategoriesType productsSubcategoriesType;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ProductsSubcategories.class)
    @JoinColumn(name = "Sub_Category_ID")
    private ProductsSubcategories productsSubcategories;

}