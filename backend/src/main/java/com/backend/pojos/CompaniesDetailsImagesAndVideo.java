package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "companies_details_images_and_video")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
public class CompaniesDetailsImagesAndVideo implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Company_Detail_Media")
    private String companyDetailImageMedia;


    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} , fetch = FetchType.LAZY, targetEntity = Companies.class)
    @JoinColumn(name = "Company_ID")
    @JsonIgnore
    private Companies company;
}
