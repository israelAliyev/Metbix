package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_cellular_technology")
@Setter
@Getter
public class ElectronicsCellularTechnology implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Cellular_Technology_ID")
    private Long cellularTechnologyId;

    @Column(name = "Cellular_Technology")
    private String cellularTechnology;

    @Column(name = "Category_ID")
    private Long categoryId;

}
