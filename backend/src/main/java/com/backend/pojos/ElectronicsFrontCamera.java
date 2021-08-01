package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_front_camera")
public class ElectronicsFrontCamera {
    @Id
    @Column(name = "Front_Camera_ID")
    private Long frontCameraId;

    @Column(name = "Front_Camera")
    private String frontCamera;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getFrontCameraId() {
        return this.frontCameraId;
    }

    public void setFrontCameraId(Long frontCameraId) {
        this.frontCameraId = frontCameraId;
    }

    public String getFrontCamera() {
        return this.frontCamera;
    }

    public void setFrontCamera(String frontCamera) {
        this.frontCamera = frontCamera;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
