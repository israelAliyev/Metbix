package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "products_details_images_and_video")
@Getter
@Setter
public class ProductsDetailsImagesAndVideo implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "Product_Detail_Image_One")
    private String productDetailImageOne;

    @Column(name = "Product_Detail_Image_Two")
    private String productDetailImageTwo;

    @Column(name = "Product_Detail_Image_Three")
    private String productDetailImageThree;

    @Column(name = "Product_Detail_Image_Four")
    private String productDetailImageFour;

    @Column(name = "Product_Detail_Image_Five")
    private String productDetailImageFive;

    @Column(name = "Product_Detail_Image_Six")
    private String productDetailImageSix;

    @Column(name = "Product_Detail_Image_Seven")
    private String productDetailImageSeven;

    @Column(name = "Product_Detail_Video")
    private String productDetailVideo;

    @Column(name = "Product_ID")
    @JsonIgnore
    private Long productId;

}
