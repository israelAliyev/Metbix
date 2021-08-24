package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "continents")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CompaniesDetailsContinents {
    @Id
    @Column(name = "Continent_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long continentId;

    @Column(name = "Continent_Name")
    private String continentName;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name="Continent_ID")
    private List<CompaniesDetailsMarketsAndBranches> companiesDetailsMarketsAndBranches;


}
