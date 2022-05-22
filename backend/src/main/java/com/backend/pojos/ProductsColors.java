package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "products_colors")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsColors implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Color_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long colorId;

    @Column(name = "Color_Name")
    private String colorName;

    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsCategories.class)
    @JoinTable(name = "ii_categories_colors",
            joinColumns = {@JoinColumn(name = "Color_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Category_ID")}
    )
    @JsonIgnore
    private Set<ProductsCategories> productsCategoriesColors = new HashSet<ProductsCategories>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsDepartments.class)
    @JoinTable(name = "ii_categories_colors",
            joinColumns = {@JoinColumn(name = "Color_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Department_ID")}
    )
    @JsonIgnore
    private Set<ProductsDepartments> productsDepartmentsColors = new HashSet<ProductsDepartments>();

}
