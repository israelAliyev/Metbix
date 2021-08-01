package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "apparel_size")
public class ApparelSize {
    @Id
    @Column(name = "Size_ID")
    private Long sizeId;

    @Column(name = "Size")
    private String size;

    @Column(name = "SubCategory_ID")
    private Long subCategoryId;

    public Long getSizeId() {
        return this.sizeId;
    }

    public void setSizeId(Long sizeId) {
        this.sizeId = sizeId;
    }

    public String getSize() {
        return this.size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Long getSubCategoryId() {
        return this.subCategoryId;
    }

    public void setSubCategoryId(Long subCategoryId) {
        this.subCategoryId = subCategoryId;
    }
}
