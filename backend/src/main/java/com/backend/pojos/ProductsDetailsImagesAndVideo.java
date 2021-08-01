package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_details_images_and_video")
public class ProductsDetailsImagesAndVideo {
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
    private Long productId;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProductDetailImageOne() {
        return this.productDetailImageOne;
    }

    public void setProductDetailImageOne(String productDetailImageOne) {
        this.productDetailImageOne = productDetailImageOne;
    }

    public String getProductDetailImageTwo() {
        return this.productDetailImageTwo;
    }

    public void setProductDetailImageTwo(String productDetailImageTwo) {
        this.productDetailImageTwo = productDetailImageTwo;
    }

    public String getProductDetailImageThree() {
        return this.productDetailImageThree;
    }

    public void setProductDetailImageThree(String productDetailImageThree) {
        this.productDetailImageThree = productDetailImageThree;
    }

    public String getProductDetailImageFour() {
        return this.productDetailImageFour;
    }

    public void setProductDetailImageFour(String productDetailImageFour) {
        this.productDetailImageFour = productDetailImageFour;
    }

    public String getProductDetailImageFive() {
        return this.productDetailImageFive;
    }

    public void setProductDetailImageFive(String productDetailImageFive) {
        this.productDetailImageFive = productDetailImageFive;
    }

    public String getProductDetailImageSix() {
        return this.productDetailImageSix;
    }

    public void setProductDetailImageSix(String productDetailImageSix) {
        this.productDetailImageSix = productDetailImageSix;
    }

    public String getProductDetailImageSeven() {
        return this.productDetailImageSeven;
    }

    public void setProductDetailImageSeven(String productDetailImageSeven) {
        this.productDetailImageSeven = productDetailImageSeven;
    }

    public String getProductDetailVideo() {
        return this.productDetailVideo;
    }

    public void setProductDetailVideo(String productDetailVideo) {
        this.productDetailVideo = productDetailVideo;
    }

    public Long getProductId() {
        return this.productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }
}
