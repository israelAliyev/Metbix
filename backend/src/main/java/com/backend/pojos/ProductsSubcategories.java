package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products_subcategories")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsSubcategories {
    @Id
    @Column(name = "SubCategory_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subCategoryId;

    @Column(name = "SubCategory_Name")
    private String subCategoryName;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsSubcategoriesType.class)
    @JoinColumn(name = "SubCategory_ID")
    private List<ProductsSubcategoriesType> subcategoriesTypes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelSize.class)
    @JoinColumn(name = "SubCategory_ID")
    private List<ApparelSize> apparelSizes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelFabricType.class)
    @JoinColumn(name = "SubCategory_ID")
    private List<ApparelFabricType> apparelFabricTypes;

}
