package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "products_departments")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsDepartments {
    @Id
    @Column(name = "Department_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departmentId;

    @Column(name = "Department")
    private String department;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsCategories.class, mappedBy = "department")
    private List<ProductsCategories> productCategories;


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_categories_colors",
            joinColumns = {@JoinColumn(name = "Department_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    private List<ProductsColors> productsColors;



    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsBrands.class)
    @JoinColumn(name="Department_ID", nullable=false)
    private List<ProductsBrands> productsBrands;

}
