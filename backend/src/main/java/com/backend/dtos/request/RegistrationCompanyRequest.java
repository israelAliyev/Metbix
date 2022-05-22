package com.backend.dtos.request;

import com.backend.pojos.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@ToString
public class RegistrationCompanyRequest {

    private String companyEmail;

    private String companyPassword;

    private String encodedCompanyEmail;

    private String companyName;

    private String companyCity;

    private String companyCountry;

    private String companyZip;

    private String companyBusinessType;

    private Long companyTotalAnnualRevenue;

    private Integer companyYearEstablished;

    private LocalDateTime companyRegistrationDate;

    private String companyAddress;

    private String companyProfilePhoto;

    private String companyPhone;

    private Integer companyEmployees;

    private String companyDesc;

    private String companyProfileBack;

    private String companyType;

    private String companyWebSite;

    private String companyProductionCapacity;


    private Set<CompaniesDetailsImagesAndVideo> companiesDetailsImagesAndVideos = new HashSet<CompaniesDetailsImagesAndVideo>();

    private Set<com.backend.pojos.CompaniesDetailsProductionCertifications> companiesDetailsProductionCertifications = new HashSet<CompaniesDetailsProductionCertifications>();

    private Set<com.backend.pojos.Continents> companiesDetailsContinents = new HashSet<Continents>();

}
