package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_screen_size")
@Getter
@Setter
public class ElectronicsScreenSize implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Screen_Size_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long screenSizeId;

    @Column(name = "Screen_Size")
    private Float screenSize;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ElectronicsScreenSizeRange.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinColumn(name = "Screen_Size_Range_ID")
    private ElectronicsScreenSizeRange electronicsScreenSizeRange;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Products.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} )
    @JoinTable(name = "II_PRODUCTS_ELECTRONICS_OPTIONS",
            joinColumns = {@JoinColumn(name = "Screen_Size_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Products product;

}
