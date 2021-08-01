package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "companies")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Companies {
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

    @Column(name = "Company_Year_Established")
    private Integer companyYearEstablished;

    @Column(name = "Company_EmailVerified")
    private Byte companyEmailVerified;

    @Column(name = "Company_RegistrationDate")
    @Temporal(TemporalType.TIMESTAMP)
    private java.sql.Timestamp companyRegistrationDate;

    @Column(name = "Company_VerificationCode")
    private String companyVerificationCode;

    @Column(name = "Company_UpdateDate")
    @Temporal(TemporalType.TIMESTAMP)
    private java.sql.Timestamp companyUpdateDate;

    @Column(name = "Company_IP")
    private String companyIp;

    @Column(name = "Company_Address")
    private String companyAddress;

    @Column(name = "Company_Role" , nullable = false)
    @JoinColumn(name = "Company_Role", table = "Companies")
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Roles.class)
    private Roles companyRole;

    @Column(name = "Company_Profile_Photo")
    private String companyProfilePhoto;

    @Column(name = "Company_Phone")
    private String companyPhone;

    @Column(name = "Company_Employees")
    private Integer companyEmployees;

    @Column(name = "Company_Desc")
    @Lob
    private String companyDesc;

    @Column(name = "Company_Profile_Back")
    private String companyProfileBack;

    @Column(name = "Company_Other_Addresses")
    private String companyOtherAddresses;




    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class , orphanRemoval = true)
    @JoinTable(name = "II_companies_products",
            joinColumns = {@JoinColumn(name = "Company_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    private List<Products> products;



    @OneToMany(cascade=CascadeType.PERSIST , orphanRemoval = true , fetch = FetchType.LAZY , targetEntity = CompaniesDetailsImagesAndVideo.class)
    @JoinColumn(name="Company_ID")
    private List<CompaniesDetailsImagesAndVideo> companiesDetailsImagesAndVideos;

    @OneToMany(cascade=CascadeType.PERSIST , orphanRemoval = true , fetch = FetchType.LAZY , targetEntity = CompaniesDetailsMarketsAndBranches.class)
    @JoinColumn(name="Company_ID")
    private List<CompaniesDetailsMarketsAndBranches> companiesDetailsMarketsAndBranches;

    @OneToMany(cascade=CascadeType.PERSIST , orphanRemoval = true , fetch = FetchType.LAZY, targetEntity = CompaniesDetailsProductionCertifications.class)
    @JoinColumn(name="Company_ID")
    private List<CompaniesDetailsProductionCertifications> companiesDetailsProductionCertifications;



}
