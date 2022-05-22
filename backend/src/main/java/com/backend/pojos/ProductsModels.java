package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "products_models")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsModels implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Model_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long modelId;

    @Column(name = "Model_Name")
    private String modelName;

    @Column(name = "Brand_ID")
    private Long brandId;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class, mappedBy = "productModel")
    @JsonIgnore
    private List<Products> products;

}
