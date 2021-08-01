package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_display_type")
public class ElectronicsDisplayType {
    @Id
    @Column(name = "Display_Type_ID")
    private Long displayTypeId;

    @Column(name = "Display_Type")
    private String displayType;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getDisplayTypeId() {
        return this.displayTypeId;
    }

    public void setDisplayTypeId(Long displayTypeId) {
        this.displayTypeId = displayTypeId;
    }

    public String getDisplayType() {
        return this.displayType;
    }

    public void setDisplayType(String displayType) {
        this.displayType = displayType;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
