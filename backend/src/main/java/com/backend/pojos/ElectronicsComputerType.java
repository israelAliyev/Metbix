package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_computer_type")
@Getter
@Setter
public class ElectronicsComputerType implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Type_ID")
    private Long typeId;

    @Column(name = "Type")
    private String type;

    @Column(name = "Category_ID")
    private Long categoryId;

}
