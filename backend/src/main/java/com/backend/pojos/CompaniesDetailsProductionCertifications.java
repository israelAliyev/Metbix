package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@Entity
@Table(name = "companies_details_production_certifications")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CompaniesDetailsProductionCertifications {
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

    @Column(name = "Certificate_Verified")
    private Byte certificateVerified;

//    @Column(name = "Company_ID")
//    private Long companyId;


}
