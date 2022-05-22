package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "automotive_max_speed")
@Getter
@Setter
public class AutomotiveMaxSpeed {
    @Id
    @Column(name = "Max_Speed_ID")
    private Long maxSpeedId;

    @Column(name = "Max_Speed")
    private String maxSpeed;

    @Column(name = "Category_ID")
    private Long categoryId;

}
