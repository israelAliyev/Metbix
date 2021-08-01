package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_battery_range")
public class ElectronicsBatteryRange {
    @Id
    @Column(name = "Battery_Range_ID")
    private Long batteryRangeId;

    @Column(name = "Battery_Range")
    private String batteryRange;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getBatteryRangeId() {
        return this.batteryRangeId;
    }

    public void setBatteryRangeId(Long batteryRangeId) {
        this.batteryRangeId = batteryRangeId;
    }

    public String getBatteryRange() {
        return this.batteryRange;
    }

    public void setBatteryRange(String batteryRange) {
        this.batteryRange = batteryRange;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
