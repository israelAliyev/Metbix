package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "companies_details_markets_and_branches")
public class CompaniesDetailsMarketsAndBranches {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "Continent_Countries_Or_Cities")
    private String continentCountriesOrCities;

    @Column(name = "Continent_Product_Quantity")
    private Long continentProductQuantity;

    @Column(name = "Continent_Verified")
    private Byte continentVerified;

    @Column(name = "Company_ID")
    private Long companyId;

    @Column(name = "Continent_ID")
    private Long continentId;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContinentCountriesOrCities() {
        return this.continentCountriesOrCities;
    }

    public void setContinentCountriesOrCities(String continentCountriesOrCities) {
        this.continentCountriesOrCities = continentCountriesOrCities;
    }

    public Long getContinentProductQuantity() {
        return this.continentProductQuantity;
    }

    public void setContinentProductQuantity(Long continentProductQuantity) {
        this.continentProductQuantity = continentProductQuantity;
    }

    public Byte getContinentVerified() {
        return this.continentVerified;
    }

    public void setContinentVerified(Byte continentVerified) {
        this.continentVerified = continentVerified;
    }

    public Long getCompanyId() {
        return this.companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public Long getContinentId() {
        return this.continentId;
    }

    public void setContinentId(Long continentId) {
        this.continentId = continentId;
    }
}
