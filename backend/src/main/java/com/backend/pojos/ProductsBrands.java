package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "products_brands")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsBrands implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Brand_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long brandId;

    @Column(name = "Brand_Name")
    private String brandName;

    @Column(name = "Category_ID" , insertable = false , updatable = false)
    private Long categoryId;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class , mappedBy = "productModel")
    @JsonIgnore
    private List<Products> products;

}
