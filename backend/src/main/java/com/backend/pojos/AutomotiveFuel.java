package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "automotive_fuel")
public class AutomotiveFuel {
    @Id
    @Column(name = "Fuel_ID")
    private Long fuelId;

    @Column(name = "Fuel")
    private String fuel;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getFuelId() {
        return this.fuelId;
    }

    public void setFuelId(Long fuelId) {
        this.fuelId = fuelId;
    }

    public String getFuel() {
        return this.fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
