package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_battery")
@Getter
@Setter
public class ElectronicsBattery implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Battery_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long batteryId;

    @Column(name = "Battery")
    private Integer battery;


    @ManyToOne(fetch = FetchType.LAZY, targetEntity = ElectronicsBatteryRange.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinColumn(name = "Battery_Range_ID")
    private ElectronicsBatteryRange electronicsBatteryRange;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Products.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinTable(name = "ii_products_electronics_options",
            joinColumns = {@JoinColumn(name = "Battery_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Products product;
}
