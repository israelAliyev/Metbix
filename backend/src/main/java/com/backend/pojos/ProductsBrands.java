package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_brands")
public class ProductsBrands {
    @Id
    @Column(name = "Brand_ID")
    private Long brandId;

    @Column(name = "Brand_Name")
    private String brandName;

    @Column(name = "Category_ID")
    private Long categoryId;

    @Column(name = "Department_ID")
    private Long departmentId;

    public Long getBrandId() {
        return this.brandId;
    }

    public void setBrandId(Long brandId) {
        this.brandId = brandId;
    }

    public String getBrandName() {
        return this.brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getDepartmentId() {
        return this.departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }
}
