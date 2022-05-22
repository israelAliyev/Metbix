package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "companies_details_production_certifications")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
public class CompaniesDetailsProductionCertifications implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Certificate_Picture")
    private String certificatePicture;

    @Column(name = "Certificate_Name")
    private String certificateName;

    @Column(name = "Certificate_Issued_By")
    private String certificateIssuedBy;

    @Column(name = "Certificate_Business_Scope")
    private String certificateBusinessScope;

    @Column(name = "Certificate_Available_Date")
    private java.sql.Timestamp certificateAvailableDate;


    @ManyToOne(cascade=CascadeType.ALL , fetch = FetchType.LAZY, targetEntity = Companies.class)
    @JoinColumn(name = "Company_ID")
    @JsonIgnore
    private Companies company;


}
