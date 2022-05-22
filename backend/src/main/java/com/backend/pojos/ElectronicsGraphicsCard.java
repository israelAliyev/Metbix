package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_graphics_card")
@Getter
@Setter
public class ElectronicsGraphicsCard implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Graphics_Card_ID")
    private Long graphicsCardId;

    @Column(name = "Graphics_Card_Model")
    private String graphicsCardModel;

    @Column(name = "Category_ID")
    private Long categoryId;

}
