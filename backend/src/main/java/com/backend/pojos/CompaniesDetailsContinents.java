package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "companies_details_continents")
public class CompaniesDetailsContinents {
    @Id
    @Column(name = "Continent_ID")
    private Long continentId;

    @Column(name = "Continent_Name")
    private String continentName;

    public Long getContinentId() {
        return this.continentId;
    }

    public void setContinentId(Long continentId) {
        this.continentId = continentId;
    }

    public String getContinentName() {
        return this.continentName;
    }

    public void setContinentName(String continentName) {
        this.continentName = continentName;
    }
}
