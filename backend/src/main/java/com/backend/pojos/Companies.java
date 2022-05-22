package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "companies")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
public class Companies implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Company_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long companyId;

    @Column(name = "Company_Email")
    private String companyEmail;

    @Column(name = "Company_Password")
    private String companyPassword;

    @Column(name = "Company_Name")
    private String companyName;

    @Column(name = "Company_City")
    private String companyCity;

    @Column(name = "Company_Country")
    private String companyCountry;

    @Column(name = "Company_Zip")
    private String companyZip;

    @Column(name = "Company_Business_Type")
    private String companyBusinessType;

    @Column(name = "Company_Total_Annual_Revenue")
    private Long companyTotalAnnualRevenue;

    @Column(name = "Company_Ratings_Count")
    private Integer companyRatingsCount;

    @Column(name = "Company_Rating")
    private Integer companyRating;

    @Column(name = "Company_Year_Established")
    private Integer companyYearEstablished;

    @Column(name = "Company_Type")
    private String companyType;

    @Column(name = "Company_EmailVerified")
    private Boolean companyEmailVerified;

    @Column(name = "Company_Website")
    private String companyWebsite;

    @Column(name = "Company_Production_Capacity")
    private String companyProductionCapacity;

    @Column(name = "Company_RegistrationDate")
    private LocalDateTime companyRegistrationDate;

    @Column(name = "Company_VerificationCode")
    private String companyVerificationCode;

    @Column(name = "Company_UpdateDate")
    private java.sql.Timestamp companyUpdateDate;

    @Column(name = "Company_Address")
    private String companyAddress;

    @JoinColumn(name = "Company_Role", table = "Companies", nullable = false)
    @ManyToOne(fetch = FetchType.EAGER)
    private Roles companyRole;

    @Column(name = "Company_Phone")
    private String companyPhone;

    @Column(name = "Company_Employees")
    private Integer companyEmployees;

    @Column(name = "Company_Desc")
    @Lob
    private String companyDesc;

    @Column(name = "Company_Profile_Photo")
    private String companyProfilePhoto;

    @Column(name = "Company_Profile_Back")
    private String companyProfileBack;



    @OneToMany(fetch = FetchType.LAZY, targetEntity = com.backend.pojos.Products.class , cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinTable(name = "II_companies_products",
            joinColumns = {@JoinColumn(name = "Company_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Set<Products> products = new HashSet<Products>();



    @OneToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} , orphanRemoval = true , fetch = FetchType.LAZY, targetEntity = com.backend.pojos.CompaniesDetailsImagesAndVideo.class , mappedBy = "company")
    @JsonIgnore
    private Set<CompaniesDetailsImagesAndVideo> companiesDetailsImagesAndVideos = new HashSet<CompaniesDetailsImagesAndVideo>();


    @OneToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} , orphanRemoval = true , fetch = FetchType.LAZY, targetEntity = com.backend.pojos.CompaniesDetailsProductionCertifications.class , mappedBy = "company")
    @JsonIgnore
    private Set<CompaniesDetailsProductionCertifications> companiesDetailsProductionCertifications = new HashSet<CompaniesDetailsProductionCertifications>();



    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} , fetch = FetchType.LAZY, targetEntity = Continents.class)
    @JoinTable(name = "II_companies_continents",
            joinColumns = {@JoinColumn(name = "Company_ID")},

            inverseJoinColumns = {@JoinColumn(name = "Continent_ID")}
    )
    @JsonIgnore
    private Set<Continents> companiesDetailsContinents = new HashSet<Continents>();



    @ManyToMany(fetch = FetchType.LAZY, targetEntity = Products.class)
    @JoinTable(name = "II_companies_request_products",
            joinColumns = {@JoinColumn(name = "Company_ID")},

            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Set<Products> requestProducts = new HashSet<Products>();




    @ManyToMany(fetch = FetchType.LAZY, targetEntity = Products.class)
    @JoinTable(name = "II_companies_basket",
            joinColumns = {@JoinColumn(name = "Company_ID")},

            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Set<Products> basketProducts = new HashSet<Products>();

}
