package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@Entity
@Table(name = "continents")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Continents {

    @Id
    @Column(name = "Continent_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long continentId;

    @Column(name = "Continent_Name")
    private String continentName;

}
