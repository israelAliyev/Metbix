package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "music_instrument")
@Getter
@Setter
public class MusicInstrument implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Instrument_ID")
    private Long instrumentId;

    @Column(name = "Instrument")
    private String instrument;

    @Column(name = "Category_ID")
    private Long categoryId;

}
