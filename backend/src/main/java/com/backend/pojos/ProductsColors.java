package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@Entity
@Table(name = "products_colors")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductsColors {
    @Id
    @Column(name = "Color_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long colorId;

    @Column(name = "Color_Name")
    private String colorName;

}
