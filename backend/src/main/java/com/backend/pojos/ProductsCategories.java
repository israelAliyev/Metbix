package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_categories")
public class ProductsCategories {
    @Id
    @Column(name = "Category_ID")
    private Long categoryId;

    @Column(name = "Category_Name")
    private String categoryName;

    @Column(name = "Department_ID")
    private Long departmentId;

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return this.categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public Long getDepartmentId() {
        return this.departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }
}
