package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_battery")
public class ElectronicsBattery {
    @Id
    @Column(name = "Battery_ID")
    private Long batteryId;

    @Column(name = "Battery")
    private Integer battery;

    @Column(name = "Category_ID")
    private Long categoryId;

    @Column(name = "Battery_Range_ID")
    private Long batteryRangeId;

    public Long getBatteryId() {
        return this.batteryId;
    }

    public void setBatteryId(Long batteryId) {
        this.batteryId = batteryId;
    }

    public Integer getBattery() {
        return this.battery;
    }

    public void setBattery(Integer battery) {
        this.battery = battery;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getBatteryRangeId() {
        return this.batteryRangeId;
    }

    public void setBatteryRangeId(Long batteryRangeId) {
        this.batteryRangeId = batteryRangeId;
    }
}
