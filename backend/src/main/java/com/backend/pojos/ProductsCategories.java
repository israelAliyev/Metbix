package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "products_categories")
@Getter
@Setter
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsCategories implements Serializable {

    private static final long serialVersionUID = 214321321421L;

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
   @JsonIgnore
    private List<Products> products;


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_categories_colors",
            joinColumns = {@JoinColumn(name = "Category_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    @JsonIgnore
    private List<ProductsColors> productsColors;


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsSubcategories.class)
    @JoinTable(name = "II_categories_subcategories",
            joinColumns = {@JoinColumn(name = "Category_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Sub_Category_ID")}
    )
    @JsonIgnore
    private List<ProductsSubcategories> productsSubcategories;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsSubcategoriesType.class)
    @JsonIgnore
    private List<ProductsSubcategoriesType> productsSubcategoriesTypes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsBrands.class)
    @JoinColumn(name="Category_ID", nullable=false)
    @JsonIgnore
    private List<ProductsBrands> productsBrands;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelSize.class)
    @JsonIgnore
    private List<ApparelSize> apparelSizes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelFabricType.class)
    @JsonIgnore
    private List<ApparelFabricType> apparelFabricTypes;


    //    products_car_options
    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JsonIgnore
    private List<ProductsColors> automativeProductsColors;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveMaxSpeed.class)
    @JsonIgnore
    private List<AutomotiveMaxSpeed> automotiveMaxSpeeds;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveFuel.class)
    @JsonIgnore
    private List<AutomotiveFuel> automotiveFuels;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveSeat.class)
    @JsonIgnore
    private List<AutomotiveSeat> automotiveSeats;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveType.class)
    @JsonIgnore
    private List<AutomotiveType> automotiveTypes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveCrash.class)
    @JsonIgnore
    private List<AutomotiveCrash> automotiveCrashes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveDistanceTraveled.class)
    @JsonIgnore
    private List<AutomotiveDistanceTraveled> automotiveDistanceTraveleds;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveEngine.class)
    @JsonIgnore
    private List<AutomotiveEngine> automotiveEngines;


    //    products_electronics_options
    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JsonIgnore
    private List<ProductsColors> electronicsProductsColors;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsMemory.class)
    @JsonIgnore
    private List<ElectronicsMemory> electronicsMemories;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsCamera.class)
    @JsonIgnore
    private List<ElectronicsCamera> electronicsCameras;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsFrontCamera.class)
    @JsonIgnore
    private List<ElectronicsFrontCamera> electronicsFrontCameras;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsOperatingSystem.class)
    @JsonIgnore
    private List<ElectronicsOperatingSystem> electronicsOperatingSystems;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsScreenSize.class)
    @JsonIgnore
    private List<ElectronicsScreenSize> electronicsScreenSizes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsDisplayType.class)
    @JsonIgnore
    private List<ElectronicsDisplayType> electronicsDisplayTypes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsCellularTechnology.class)
    @JsonIgnore
    private List<ElectronicsCellularTechnology> electronicsCellularTechnologies;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsBattery.class)
    @JsonIgnore
    private List<ElectronicsBattery> electronicsBatteries;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsProcessor.class)
    @JsonIgnore
    private List<ElectronicsProcessor> electronicsProcessors;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsRam.class)
    @JsonIgnore
    private List<ElectronicsRam> electronicsRams;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsGraphicsCard.class)
    @JsonIgnore
    private List<ElectronicsGraphicsCard> electronicsGraphicsCards;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsComputerType.class)
    @JsonIgnore
    private List<ElectronicsComputerType> electronicsComputerTypes;




    //    products_music_options
    @OneToMany(fetch = FetchType.LAZY, targetEntity = MusicInstrument.class)
    @JsonIgnore
    private List<MusicInstrument> musicInstruments;


    //    products_job_options
    @OneToOne(fetch = FetchType.LAZY, targetEntity = ProductsJobOptions.class)
    @JoinColumn(name="Category_ID")
    @JsonIgnore
    private ProductsJobOptions productsJobOptions;


    //    products_home_options
    @OneToOne(fetch = FetchType.LAZY, targetEntity = ProductsHomeOptions.class)
    @JoinColumn(name="Category_ID")
    @JsonIgnore
    private ProductsHomeOptions productsHomeOptions;


}
