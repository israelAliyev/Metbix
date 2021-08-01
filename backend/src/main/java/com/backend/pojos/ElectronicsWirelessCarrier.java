package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_wireless_carrier")
public class ElectronicsWirelessCarrier {
    @Id
    @Column(name = "Wireless_Carrier_ID")
    private Long wirelessCarrierId;

    @Column(name = "Wireless_Carrier")
    private String wirelessCarrier;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getWirelessCarrierId() {
        return this.wirelessCarrierId;
    }

    public void setWirelessCarrierId(Long wirelessCarrierId) {
        this.wirelessCarrierId = wirelessCarrierId;
    }

    public String getWirelessCarrier() {
        return this.wirelessCarrier;
    }

    public void setWirelessCarrier(String wirelessCarrier) {
        this.wirelessCarrier = wirelessCarrier;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
