package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products_brands")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsBrands {
    @Id
    @Column(name = "Brand_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long brandId;

    @Column(name = "Brand_Name")
    private String brandName;

//    @Column(name = "Category_ID")
//    private Long categoryId;

//    @Column(name = "Department_ID")
//    private Long departmentId;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class , mappedBy = "productModel")
    private List<Products> products;

}
