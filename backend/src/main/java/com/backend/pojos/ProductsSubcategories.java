package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_subcategories")
public class ProductsSubcategories {
    @Id
    @Column(name = "SubCategory_ID")
    private Long subCategoryId;

    @Column(name = "SubCategory_Name")
    private String subCategoryName;

    public Long getSubCategoryId() {
        return this.subCategoryId;
    }

    public void setSubCategoryId(Long subCategoryId) {
        this.subCategoryId = subCategoryId;
    }

    public String getSubCategoryName() {
        return this.subCategoryName;
    }

    public void setSubCategoryName(String subCategoryName) {
        this.subCategoryName = subCategoryName;
    }
}
