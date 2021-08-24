package com.backend.dtos;

import com.backend.pojos.CompaniesDetailsImagesAndVideo;
import com.backend.pojos.CompaniesDetailsProductionCertifications;
import com.backend.pojos.Continents;
import com.backend.pojos.Products;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class UpdateCompanyRequest {



    private String companyPassword;

    private String companyName;

    private String companyCity;

    private String companyCountry;

    private String companyZip;

    private String companyBusinessType;

    private Long companyTotalAnnualRevenue;

    private Integer companyYearEstablished;

    private String companyAddress;

    private String companyProfilePhoto;

    private String companyPhone;

    private Integer companyEmployees;

    private String companyDesc;

    private String companyProfileBack;

    private String companyOtherAddress;


    private Set<Products> products = new HashSet<Products>();

    private Set<Products> basketProducts = new HashSet<Products>();


    private Set<CompaniesDetailsImagesAndVideo> companiesDetailsImagesAndVideos = new HashSet<CompaniesDetailsImagesAndVideo>();

    private Set<com.backend.pojos.CompaniesDetailsProductionCertifications> companiesDetailsProductionCertifications = new HashSet<CompaniesDetailsProductionCertifications>();

    private Set<com.backend.pojos.Continents> companiesDetailsContinents = new HashSet<Continents>();


}
