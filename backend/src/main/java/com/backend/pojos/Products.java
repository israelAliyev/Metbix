package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@Entity
@Table(name = "products")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Products {
    @Id
    @Column(name = "Product_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(name = "Product_Name")
    private String productName;

    @Column(name = "Product_Price")
    private Float productPrice;

    @Column(name = "Product_Old_Price")
    private Integer productOldPrice;

    @Column(name = "Product_Weight")
    private Float productWeight;

    @Column(name = "Product_Short_Desc")
    private String productShortDesc;

    @Column(name = "Product_Long_Desc")
    private String productLongDesc;

    @Column(name = "Product_Cover_Photo")
    private String productCoverPhoto;

    @Column(name = "Product_Update_Date")
    private java.sql.Timestamp productUpdateDate;

    @Column(name = "Product_Create_Date")
    private java.sql.Timestamp productCreateDate;

    @Column(name = "Product_Category_ID")
    private Long productCategoryId;

    @Column(name = "Product_Brand_ID")
    private Long productBrandId;

    @Column(name = "Product_Model_ID")
    private Long productModelId;

    @Column(name = "Product_Condition")
    private String productCondition;

    @Column(name = "Product_Manufacturer_Warranty")
    private String productManufacturerWarranty;

    @Column(name = "Product_Domestic_Shipping")
    private Byte productDomesticShipping;

    @Column(name = "Product_International_Shipping")
    private Byte productInternationalShipping;

    @Column(name = "Product_Year")
    private Integer productYear;
    
}