package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_graphics_card")
public class ElectronicsGraphicsCard {
    @Id
    @Column(name = "Graphics_Card_ID")
    private Long graphicsCardId;

    @Column(name = "Graphics_Card_Model")
    private String graphicsCardModel;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getGraphicsCardId() {
        return this.graphicsCardId;
    }

    public void setGraphicsCardId(Long graphicsCardId) {
        this.graphicsCardId = graphicsCardId;
    }

    public String getGraphicsCardModel() {
        return this.graphicsCardModel;
    }

    public void setGraphicsCardModel(String graphicsCardModel) {
        this.graphicsCardModel = graphicsCardModel;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
