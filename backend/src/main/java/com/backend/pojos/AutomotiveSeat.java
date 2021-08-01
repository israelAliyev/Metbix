package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "automotive_seat")
public class AutomotiveSeat {
    @Id
    @Column(name = "Seat_ID")
    private Long seatId;

    @Column(name = "Seat")
    private String seat;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getSeatId() {
        return this.seatId;
    }

    public void setSeatId(Long seatId) {
        this.seatId = seatId;
    }

    public String getSeat() {
        return this.seat;
    }

    public void setSeat(String seat) {
        this.seat = seat;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
