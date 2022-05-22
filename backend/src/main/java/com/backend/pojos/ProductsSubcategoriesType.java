package com.backend.pojos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "products_subcategories_type")
@Getter
@Setter
public class ProductsSubcategoriesType implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Sub_Category_Type_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long subCategoryTypeId;

    @Column(name = "Sub_Category_ID")
    private Long subCategoryId;

    @Column(name = "Sub_Category_Type_Name")
    private String subCategoryTypeName;


}
