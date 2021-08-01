package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "music_instrument")
public class MusicInstrument {
    @Id
    @Column(name = "Instrument_ID")
    private Long ınstrumentId;

    @Column(name = "Instrument")
    private String ınstrument;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getInstrumentId() {
        return this.ınstrumentId;
    }

    public void setInstrumentId(Long ınstrumentId) {
        this.ınstrumentId = ınstrumentId;
    }

    public String getInstrument() {
        return this.ınstrument;
    }

    public void setInstrument(String ınstrument) {
        this.ınstrument = ınstrument;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
