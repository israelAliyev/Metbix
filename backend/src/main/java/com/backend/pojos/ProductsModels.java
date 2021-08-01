package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products_models")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsModels {
    @Id
    @Column(name = "Model_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long modelId;

    @Column(name = "Model_Name")
    private String modelName;

    @Column(name = "Brand_ID")
    private Long brandId;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class , mappedBy = "productModel")
    private List<Products> products;

}
