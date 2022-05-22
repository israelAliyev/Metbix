package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "products_home_options")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
public class ProductsHomeOptions implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Home_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long homeID;

    @OneToOne(fetch = FetchType.LAZY, targetEntity = Products.class , cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinColumn(name = "Product_ID" )
    @JsonIgnore
    private Products product;


//    @Column(name = "Category_ID")
//    private Long categoryId;

    @Column(name = "Area")
    private Long area;

    @Column(name = "Garage")
    private Boolean garage;

    @Column(name = "Garden")
    private Boolean garden;

    @Column(name = "Balcony")
    private Boolean balcony;

    @Column(name = "Floors")
    private Integer floors;

    @Column(name = "Heating_Type")
    private String heatingType;


}
