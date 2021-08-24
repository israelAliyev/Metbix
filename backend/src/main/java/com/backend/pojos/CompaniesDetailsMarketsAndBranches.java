package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@Entity
@Table(name = "II_companies_continents")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CompaniesDetailsMarketsAndBranches {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Continent_Countries_Or_Cities")
    private String continentCountriesOrCities;

    @Column(name = "Continent_Product_Quantity")
    private Long continentProductQuantity;

    @Column(name = "Continent_Verified")
    private Byte continentVerified;

//    @Column(name = "Company_ID")
//    private Long companyId;
//
//    @Column(name = "Continent_ID")
//    private Long continentId;




}
