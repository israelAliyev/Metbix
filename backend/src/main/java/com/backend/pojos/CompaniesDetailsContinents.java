package com.backend.pojos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "continents")
@Getter
@Setter
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CompaniesDetailsContinents implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Continent_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long continentId;

    @Column(name = "Continent_Name")
    private String continentName;

}
