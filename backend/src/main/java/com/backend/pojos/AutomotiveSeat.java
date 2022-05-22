package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "automotive_seat")
@Getter
@Setter
public class AutomotiveSeat {
    @Id
    @Column(name = "Seat_ID")
    private Long seatId;

    @Column(name = "Seat")
    private String seat;

    @Column(name = "Category_ID")
    private Long categoryId;

}
