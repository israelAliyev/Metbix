//package com.example.demo;
//
//import lombok.Data;
//import org.hibernate.annotations.CacheConcurrencyStrategy;
//
//import javax.persistence.*;
//import java.util.List;
//
//@Entity
//@Table(name = "products_pictures")
//@Data
//@Cacheable
//@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
//public class ProductsPictures {
//
//    @Id
//    @Column(name = "Picture_ID")
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long pictureId;
//
//    @Column(name = "Picture_Path")
//    private String picturePath;
//
//    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Products.class)
//    @JoinColumn(name = "Product_ID")
//    private Products product;
//
//}
