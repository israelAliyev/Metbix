package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "automotive_distance_traveled")
@Getter
@Setter
public class AutomotiveDistanceTraveled implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Distance_Traveled_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long distanceTraveledId;

    @Column(name = "Distance_Traveled")
    private Long distanceTraveled;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = AutomotiveDistanceTraveledRange.class, cascade =CascadeType.ALL)
    @JoinColumn(name = "Distance_Traveled_Range_ID")
    private AutomotiveDistanceTraveledRange distanceTraveledRange;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Products.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinTable(name = "II_products_car_options",
            joinColumns = {@JoinColumn(name = "Distance_Traveled_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Products product;
}
