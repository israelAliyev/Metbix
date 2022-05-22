package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "automotive_distance_traveled_range")
@Getter
@Setter
public class AutomotiveDistanceTraveledRange {

    @Id
    @Column(name = "Distance_Traveled_Range_ID")
    private Long distanceTraveledRangeId;

    @Column(name = "Distance_Traveled_Range")
    private String distanceTraveledRange;

    @Column(name = "Category_ID")
    private Long categoryId;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = AutomotiveDistanceTraveled.class, cascade =CascadeType.ALL)
    @JoinColumn(name = "Distance_Traveled_Range_ID")
    @JsonIgnore
    private List<AutomotiveDistanceTraveled> automotiveDistanceTraveleds;
}
