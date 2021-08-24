//package com.example.demo;
//
//import lombok.Data;
//import org.hibernate.annotations.CacheConcurrencyStrategy;
//
//import javax.persistence.*;
//import java.awt.print.Book;
//import java.util.List;
//
//@Entity
//@Table(name = "products")
//@Data
//@Cacheable
//@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
//public class Products {
//    @Id
//    @Column(name = "Product_ID")
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long productId;
//
//
//    @Column(name = "Product_Price")
//    private Float productPrice;
//
//    @Column(name = "Product_Old_Price")
//    private Integer productOldPrice;
//
//    @Column(name = "Product_Weight")
//    private Float productWeight;
//
//    @Column(name = "Product_Short_Desc")
//    @Lob
//    private String productShortDesc;
//
//    @Column(name = "Product_Long_Desc")
//    @Lob
//    private String productLongDesc;
//
//    @Column(name = "Product_Cover_Photo")
//    private String productCoverPhoto;
//
//    @Column(name = "Product_Update_Date")
//    private java.sql.Timestamp productUpdateDate;
//
//    @Column(name = "Product_Create_Date")
//    private java.sql.Timestamp productCreateDate;
//
//
//    @Column(name = "Product_Status")
//    private String productStatus;
//
//    @Column(name = "Product_Warranty" , columnDefinition="tinyint(null) default null")
//    private Boolean productWarranty = null;
//
//    @Column(name = "Product_Domestic_Shipping" , columnDefinition="tinyint(null) default null")
//    private Boolean productDomesticShipping;
//
//    @Column(name = "Product_International_Shipping" , columnDefinition="tinyint(null) default null")
//    private Boolean productInternationalShipping;
//
//    @Column(name = "Product_Year")
//    private Integer productYear;
//
//
//    @Column(name = "Product_Rating")
//    private Integer productRating;
//
//    @Column(name = "Product_Evaluate_Count")
//    private Integer productEvaluateCount;
//
//    @Column(name = "Product_Request_Count")
//    private Integer productRequestCount;
//
//
//    @Column(name = "Product_Five_Stars")
//    private Integer productFiveStars;
//
//    @Column(name = "Product_Four_Stars")
//    private Integer productFourStars;
//
//    @Column(name = "Product_Three_Stars")
//    private Integer productThreeStars;
//
//    @Column(name = "Product_Two_Stars")
//    private Integer productTwoStars;
//
//    @Column(name = "Product_One_Star")
//    private Integer productOneStar;
//
//
//
//
//    //    II_products_apparel_options
//    @ManyToMany(fetch = FetchType.EAGER, targetEntity = ProductsColors.class)
//    @JoinTable(name = "II_products_apparel_options",
//            joinColumns = {@JoinColumn(name = "Product_ID")},
//            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
//    )
//    private List<ProductsColors> apparelProductsColors;
//
//
//    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsPictures.class
//            ,cascade = CascadeType.ALL , mappedBy = "product")
//    private List<ProductsPictures> productsPictures;
//
////    public void addPicture(ProductsPictures picture){
////        productsPictures.add(picture);
////        picture.setProduct(this);
////    }
//
//}