package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "automotive_distance_traveled")
public class AutomotiveDistanceTraveled {
    @Id
    @Column(name = "Distance_Traveled_ID")
    private Long distanceTraveledId;

    @Column(name = "Distance_Traveled")
    private Long distanceTraveled;

    @Column(name = "Category_ID")
    private Long categoryId;

    @Column(name = "Distance_Traveled_Range_ID")
    private Long distanceTraveledRangeId;

    public Long getDistanceTraveledId() {
        return this.distanceTraveledId;
    }

    public void setDistanceTraveledId(Long distanceTraveledId) {
        this.distanceTraveledId = distanceTraveledId;
    }

    public Long getDistanceTraveled() {
        return this.distanceTraveled;
    }

    public void setDistanceTraveled(Long distanceTraveled) {
        this.distanceTraveled = distanceTraveled;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getDistanceTraveledRangeId() {
        return this.distanceTraveledRangeId;
    }

    public void setDistanceTraveledRangeId(Long distanceTraveledRangeId) {
        this.distanceTraveledRangeId = distanceTraveledRangeId;
    }
}
