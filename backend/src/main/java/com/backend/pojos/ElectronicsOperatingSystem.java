package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_operating_system")
public class ElectronicsOperatingSystem {
    @Id
    @Column(name = "Operating_System_ID")
    private Long operatingSystemId;

    @Column(name = "Operating_System")
    private String operatingSystem;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getOperatingSystemId() {
        return this.operatingSystemId;
    }

    public void setOperatingSystemId(Long operatingSystemId) {
        this.operatingSystemId = operatingSystemId;
    }

    public String getOperatingSystem() {
        return this.operatingSystem;
    }

    public void setOperatingSystem(String operatingSystem) {
        this.operatingSystem = operatingSystem;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
