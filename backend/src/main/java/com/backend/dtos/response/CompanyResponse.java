package com.backend.dtos.response;

import com.backend.pojos.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.HashSet;
import java.util.Set;

@ToString
@Getter
@Setter
public class CompanyResponse {

    private Companies company;
    private Set<CompaniesDetailsImagesAndVideo> companiesDetailsImagesAndVideos = new HashSet<CompaniesDetailsImagesAndVideo>();
    private Set<CompaniesDetailsProductionCertifications> companiesDetailsProductionCertifications = new HashSet<CompaniesDetailsProductionCertifications>();
    private Set<Continents> companiesDetailsContinents = new HashSet<Continents>();
    private Set<Products> products = new HashSet<Products>();
    private Set<Products> requestProducts = new HashSet<Products>();
    private Set<Products> basketProducts = new HashSet<Products>();

}
