package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_colors")
public class ProductsColors {
    @Id
    @Column(name = "Color_ID")
    private Long colorId;

    @Column(name = "Color_Name")
    private String colorName;

    public Long getColorId() {
        return this.colorId;
    }

    public void setColorId(Long colorId) {
        this.colorId = colorId;
    }

    public String getColorName() {
        return this.colorName;
    }

    public void setColorName(String colorName) {
        this.colorName = colorName;
    }
}
