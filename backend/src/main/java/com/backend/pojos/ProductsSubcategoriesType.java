package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_subcategories_type")
public class ProductsSubcategoriesType {
    @Id
    @Column(name = "SubCategory_Type_ID")
    private Long subCategoryTypeId;

    @Column(name = "SubCategory_ID")
    private Long subCategoryId;

    @Column(name = "SubCategory_Type_Name")
    private String subCategoryTypeName;

    public Long getSubCategoryTypeId() {
        return this.subCategoryTypeId;
    }

    public void setSubCategoryTypeId(Long subCategoryTypeId) {
        this.subCategoryTypeId = subCategoryTypeId;
    }

    public Long getSubCategoryId() {
        return this.subCategoryId;
    }

    public void setSubCategoryId(Long subCategoryId) {
        this.subCategoryId = subCategoryId;
    }

    public String getSubCategoryTypeName() {
        return this.subCategoryTypeName;
    }

    public void setSubCategoryTypeName(String subCategoryTypeName) {
        this.subCategoryTypeName = subCategoryTypeName;
    }
}
