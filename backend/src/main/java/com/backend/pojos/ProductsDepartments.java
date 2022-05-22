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
@Table(name = "products_departments")
@Getter
@Setter
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsDepartments implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Department_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departmentId;

    @Column(name = "Department")
    private String department;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = ProductsCategories.class, mappedBy = "department")
    @JsonIgnore
    private List<ProductsCategories> productCategories;


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = ProductsColors.class)
    @JoinTable(name = "II_categories_colors",
            joinColumns = {@JoinColumn(name = "Department_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Color_ID")}
    )
    @JsonIgnore
    private List<ProductsColors> productsColors;

}
