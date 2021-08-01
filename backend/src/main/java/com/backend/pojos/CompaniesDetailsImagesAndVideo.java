package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "companies_details_images_and_video")
public class CompaniesDetailsImagesAndVideo {
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "Company_Detail_Image_One")
    private String companyDetailImageOne;

    @Column(name = "Company_Detail_Image_Two")
    private String companyDetailImageTwo;

    @Column(name = "Company_Detail_Image_Three")
    private String companyDetailImageThree;

    @Column(name = "Company_Detail_Image_Four")
    private String companyDetailImageFour;

    @Column(name = "Company_Detail_Image_Five")
    private String companyDetailImageFive;

    @Column(name = "Company_Detail_Image_Six")
    private String companyDetailImageSix;

    @Column(name = "Company_Detail_Image_Seven")
    private String companyDetailImageSeven;

    @Column(name = "Company_Detail_Video")
    private String companyDetailVideo;

    @Column(name = "Company_ID")
    private Long companyId;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyDetailImageOne() {
        return this.companyDetailImageOne;
    }

    public void setCompanyDetailImageOne(String companyDetailImageOne) {
        this.companyDetailImageOne = companyDetailImageOne;
    }

    public String getCompanyDetailImageTwo() {
        return this.companyDetailImageTwo;
    }

    public void setCompanyDetailImageTwo(String companyDetailImageTwo) {
        this.companyDetailImageTwo = companyDetailImageTwo;
    }

    public String getCompanyDetailImageThree() {
        return this.companyDetailImageThree;
    }

    public void setCompanyDetailImageThree(String companyDetailImageThree) {
        this.companyDetailImageThree = companyDetailImageThree;
    }

    public String getCompanyDetailImageFour() {
        return this.companyDetailImageFour;
    }

    public void setCompanyDetailImageFour(String companyDetailImageFour) {
        this.companyDetailImageFour = companyDetailImageFour;
    }

    public String getCompanyDetailImageFive() {
        return this.companyDetailImageFive;
    }

    public void setCompanyDetailImageFive(String companyDetailImageFive) {
        this.companyDetailImageFive = companyDetailImageFive;
    }

    public String getCompanyDetailImageSix() {
        return this.companyDetailImageSix;
    }

    public void setCompanyDetailImageSix(String companyDetailImageSix) {
        this.companyDetailImageSix = companyDetailImageSix;
    }

    public String getCompanyDetailImageSeven() {
        return this.companyDetailImageSeven;
    }

    public void setCompanyDetailImageSeven(String companyDetailImageSeven) {
        this.companyDetailImageSeven = companyDetailImageSeven;
    }

    public String getCompanyDetailVideo() {
        return this.companyDetailVideo;
    }

    public void setCompanyDetailVideo(String companyDetailVideo) {
        this.companyDetailVideo = companyDetailVideo;
    }

    public Long getCompanyId() {
        return this.companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }
}
