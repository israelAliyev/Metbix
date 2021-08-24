package com.example.demo;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.time.LocalDateTime;
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



    @Column(name = "Company_EmailVerified" , columnDefinition="tinyint(1) default 1")
    private Boolean companyEmailVerified = false;


    @Column(name = "Company_RegistrationDate")
    private LocalDateTime companyRegistrationDate;

    @Column(name = "Company_VerificationCode")
    private String companyVerificationCode;

    @Column(name = "Company_UpdateDate")
    private java.sql.Timestamp companyUpdateDate;

    @Column(name = "Company_IP")
    private String companyIp;

    @Column(name = "Company_Address")
    private String companyAddress;

}
