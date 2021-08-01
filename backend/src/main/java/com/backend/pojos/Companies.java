package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

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

    @Column(name = "Company_Role")
    private Integer companyRole;

    @Column(name = "Company_Profile_Photo")
    private String companyProfilePhoto;

    @Column(name = "Company_Phone")
    private String companyPhone;

    @Column(name = "Company_Employees")
    private Integer companyEmployees;

    @Column(name = "Company_Desc")
    private String companyDesc;

    @Column(name = "Company_Profile_Back")
    private String companyProfileBack;

    @Column(name = "Company_Other_Addresses")
    private String companyOtherAddresses;
}
