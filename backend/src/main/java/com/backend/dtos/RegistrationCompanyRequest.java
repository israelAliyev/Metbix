package com.backend.dtos;

import com.backend.pojos.*;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class RegistrationCompanyRequest {

    private String companyEmail;

    private String companyPassword;

    private String companyName;

    private String companyCity;

    private String companyCountry;

    private String companyZip;

    private String companyBusinessType;

    private Long companyTotalAnnualRevenue;

    private Integer companyYearEstablished;

    private LocalDateTime companyRegistrationDate;

    private String companyIp;

    private String companyAddress;

    private String companyProfilePhoto;

    private String companyPhone;

    private Integer companyEmployees;

    private String companyDesc;

    private String companyProfileBack;

    private String companyOtherAddress;



    private Set<CompaniesDetailsImagesAndVideo> companiesDetailsImagesAndVideos = new HashSet<CompaniesDetailsImagesAndVideo>();

    private Set<com.backend.pojos.CompaniesDetailsProductionCertifications> companiesDetailsProductionCertifications = new HashSet<CompaniesDetailsProductionCertifications>();

    private Set<com.backend.pojos.Continents> companiesDetailsContinents = new HashSet<Continents>();

}
