package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_cellular_technology")
public class ElectronicsCellularTechnology {
    @Id
    @Column(name = "Cellular_Technology_ID")
    private Long cellularTechnologyId;

    @Column(name = "Cellular_Technology")
    private String cellularTechnology;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getCellularTechnologyId() {
        return this.cellularTechnologyId;
    }

    public void setCellularTechnologyId(Long cellularTechnologyId) {
        this.cellularTechnologyId = cellularTechnologyId;
    }

    public String getCellularTechnology() {
        return this.cellularTechnology;
    }

    public void setCellularTechnology(String cellularTechnology) {
        this.cellularTechnology = cellularTechnology;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
