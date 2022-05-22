package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "electronics_battery_range")
@Getter
@Setter
public class ElectronicsBatteryRange implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Battery_Range_ID")
    private Long batteryRangeId;

    @Column(name = "Battery_Range")
    private String batteryRange;

    @Column(name = "Category_ID")
    @JsonIgnore
    private Long categoryId;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsBattery.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinColumn(name = "Battery_Range_ID")
    @JsonIgnore
    private List<ElectronicsBattery> electronicsBattery;
}
