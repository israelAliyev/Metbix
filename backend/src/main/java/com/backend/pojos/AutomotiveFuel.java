package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "automotive_fuel")
@Getter
@Setter
public class AutomotiveFuel implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Fuel_ID")
    private Long fuelId;

    @Column(name = "Fuel")
    private String fuel;

    @Column(name = "Category_ID")
    private Long categoryId;

}
