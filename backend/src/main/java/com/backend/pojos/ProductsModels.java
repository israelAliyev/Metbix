package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_models")
public class ProductsModels {
    @Id
    @Column(name = "Model_ID")
    private Long modelId;

    @Column(name = "Model_Name")
    private String modelName;

    @Column(name = "Brand_ID")
    private Long brandId;

    public Long getModelId() {
        return this.modelId;
    }

    public void setModelId(Long modelId) {
        this.modelId = modelId;
    }

    public String getModelName() {
        return this.modelName;
    }

    public void setModelName(String modelName) {
        this.modelName = modelName;
    }

    public Long getBrandId() {
        return this.brandId;
    }

    public void setBrandId(Long brandId) {
        this.brandId = brandId;
    }
}
