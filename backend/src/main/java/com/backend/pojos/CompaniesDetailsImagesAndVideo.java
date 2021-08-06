package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@Entity
@Table(name = "companies_details_images_and_video")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class CompaniesDetailsImagesAndVideo {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

//    @Column(name = "Company_ID")
//    private Long companyId;



}
