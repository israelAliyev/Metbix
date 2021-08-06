package com.backend.pojos;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "products_subcategories_type")
@Data
public class ProductsSubcategoriesType {
    @Id
    @Column(name = "SubCategory_Type_ID")
    private Long subCategoryTypeId;

    @Column(name = "SubCategory_ID")
    private Long subCategoryId;

    @Column(name = "SubCategory_Type_Name")
    private String subCategoryTypeName;


}
