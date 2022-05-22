package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_ram")
@Getter
@Setter
public class ElectronicsRam implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Ram_ID")
    private Long ramId;

    @Column(name = "Ram_GB")
    private String ramGb;

    @Column(name = "Category_ID")
    private Long categoryId;

}
