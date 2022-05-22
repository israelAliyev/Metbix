package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "products_subcategories")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
public class ProductsSubcategories implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Sub_Category_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subCategoryId;

    @Column(name = "Sub_Category_Name")
    private String subCategoryName;

    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsCategories.class)
    @JoinTable(name = "II_categories_subcategories",
            joinColumns = {@JoinColumn(name = "Sub_Category_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Category_ID")}
    )
    @JsonIgnore
    private List<ProductsCategories> productsCategory;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsSubcategoriesType.class)
    @JoinColumn(name = "Sub_Category_ID")
    @JsonIgnore
    private List<ProductsSubcategoriesType> subcategoriesTypes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelSize.class)
    @JoinColumn(name = "Sub_Category_ID")
    @JsonIgnore
    private List<ApparelSize> apparelSizes;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = ApparelFabricType.class)
    @JoinColumn(name = "Sub_Category_ID")
    @JsonIgnore
    private List<ApparelFabricType> apparelFabricTypes;

}
