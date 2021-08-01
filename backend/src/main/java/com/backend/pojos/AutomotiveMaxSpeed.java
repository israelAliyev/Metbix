package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "automotive_max_speed")
public class AutomotiveMaxSpeed {
    @Id
    @Column(name = "Max_Speed_ID")
    private Long maxSpeedId;

    @Column(name = "Max_Speed")
    private String maxSpeed;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getMaxSpeedId() {
        return this.maxSpeedId;
    }

    public void setMaxSpeedId(Long maxSpeedId) {
        this.maxSpeedId = maxSpeedId;
    }

    public String getMaxSpeed() {
        return this.maxSpeed;
    }

    public void setMaxSpeed(String maxSpeed) {
        this.maxSpeed = maxSpeed;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
