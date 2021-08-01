package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_camera")
public class ElectronicsCamera {
    @Id
    @Column(name = "Camera_ID")
    private Long cameraId;

    @Column(name = "Camera_MP")
    private String cameraMp;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getCameraId() {
        return this.cameraId;
    }

    public void setCameraId(Long cameraId) {
        this.cameraId = cameraId;
    }

    public String getCameraMp() {
        return this.cameraMp;
    }

    public void setCameraMp(String cameraMp) {
        this.cameraMp = cameraMp;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
