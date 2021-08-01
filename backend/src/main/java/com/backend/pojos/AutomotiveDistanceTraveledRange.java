package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "automotive_distance_traveled_range")
public class AutomotiveDistanceTraveledRange {
    @Id
    @Column(name = "Distance_Traveled_Range_ID")
    private Long distanceTraveledRangeId;

    @Column(name = "Distance_Traveled_Range")
    private String distanceTraveledRange;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getDistanceTraveledRangeId() {
        return this.distanceTraveledRangeId;
    }

    public void setDistanceTraveledRangeId(Long distanceTraveledRangeId) {
        this.distanceTraveledRangeId = distanceTraveledRangeId;
    }

    public String getDistanceTraveledRange() {
        return this.distanceTraveledRange;
    }

    public void setDistanceTraveledRange(String distanceTraveledRange) {
        this.distanceTraveledRange = distanceTraveledRange;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
