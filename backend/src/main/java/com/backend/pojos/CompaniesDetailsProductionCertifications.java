package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "companies_details_production_certifications")
public class CompaniesDetailsProductionCertifications {
    @Id
    @Column(name = "id")
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

    @Column(name = "Company_ID")
    private Long companyId;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCertificatePicture() {
        return this.certificatePicture;
    }

    public void setCertificatePicture(String certificatePicture) {
        this.certificatePicture = certificatePicture;
    }

    public String getCertificateName() {
        return this.certificateName;
    }

    public void setCertificateName(String certificateName) {
        this.certificateName = certificateName;
    }

    public String getCertificateIssuedBy() {
        return this.certificateIssuedBy;
    }

    public void setCertificateIssuedBy(String certificateIssuedBy) {
        this.certificateIssuedBy = certificateIssuedBy;
    }

    public String getCertificateBusinessScope() {
        return this.certificateBusinessScope;
    }

    public void setCertificateBusinessScope(String certificateBusinessScope) {
        this.certificateBusinessScope = certificateBusinessScope;
    }

    public java.sql.Timestamp getCertificateAvailableDate() {
        return this.certificateAvailableDate;
    }

    public void setCertificateAvailableDate(java.sql.Timestamp certificateAvailableDate) {
        this.certificateAvailableDate = certificateAvailableDate;
    }

    public Byte getCertificateVerified() {
        return this.certificateVerified;
    }

    public void setCertificateVerified(Byte certificateVerified) {
        this.certificateVerified = certificateVerified;
    }

    public Long getCompanyId() {
        return this.companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }
}
