package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "automotive_engine")
public class AutomotiveEngine {
    @Id
    @Column(name = "Engine_ID")
    private Long engineId;

    @Column(name = "Engine")
    private String engine;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getEngineId() {
        return this.engineId;
    }

    public void setEngineId(Long engineId) {
        this.engineId = engineId;
    }

    public String getEngine() {
        return this.engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
