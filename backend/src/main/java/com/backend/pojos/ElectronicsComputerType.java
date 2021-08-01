package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_computer_type")
public class ElectronicsComputerType {
    @Id
    @Column(name = "Type_ID")
    private Long typeId;

    @Column(name = "Type")
    private String type;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getTypeId() {
        return this.typeId;
    }

    public void setTypeId(Long typeId) {
        this.typeId = typeId;
    }

    public String getType() {
        return this.type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
