package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_home_options")
public class ProductsHomeOptions {

    @Id
    @Column(name = "Product_ID")
    private Long productId;

    @Column(name = "Category_ID")
    private Long categoryId;

    @Column(name = "Area")
    private Long area;

    @Column(name = "Garage")
    private Integer garage;

    @Column(name = "Garden")
    private String garden;

    @Column(name = "Floors")
    private Integer floors;

    @Column(name = "Balcony")
    private String balcony;

    @Column(name = "Heating_Type")
    private String heatingType;

    public Long getProductId() {
        return this.productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getArea() {
        return this.area;
    }

    public void setArea(Long area) {
        this.area = area;
    }

    public Integer getGarage() {
        return this.garage;
    }

    public void setGarage(Integer garage) {
        this.garage = garage;
    }

    public String getGarden() {
        return this.garden;
    }

    public void setGarden(String garden) {
        this.garden = garden;
    }

    public Integer getFloors() {
        return this.floors;
    }

    public void setFloors(Integer floors) {
        this.floors = floors;
    }

    public String getBalcony() {
        return this.balcony;
    }

    public void setBalcony(String balcony) {
        this.balcony = balcony;
    }

    public String getHeatingType() {
        return this.heatingType;
    }

    public void setHeatingType(String heatingType) {
        this.heatingType = heatingType;
    }
}
