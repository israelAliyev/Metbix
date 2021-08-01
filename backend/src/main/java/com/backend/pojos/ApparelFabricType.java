package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "apparel_fabric_type")
public class ApparelFabricType {
    @Id
    @Column(name = "Fabric_Type_ID")
    private Long fabricTypeId;

    @Column(name = "Fabric_Type")
    private String fabricType;

    @Column(name = "SubCategory_ID")
    private Long subCategoryId;

    public Long getFabricTypeId() {
        return this.fabricTypeId;
    }

    public void setFabricTypeId(Long fabricTypeId) {
        this.fabricTypeId = fabricTypeId;
    }

    public String getFabricType() {
        return this.fabricType;
    }

    public void setFabricType(String fabricType) {
        this.fabricType = fabricType;
    }

    public Long getSubCategoryId() {
        return this.subCategoryId;
    }

    public void setSubCategoryId(Long subCategoryId) {
        this.subCategoryId = subCategoryId;
    }
}
