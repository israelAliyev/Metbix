package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_display_type")
@Getter
@Setter
public class ElectronicsDisplayType implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Display_Type_ID")
    private Long displayTypeId;

    @Column(name = "Display_Type")
    private String displayType;

    @Column(name = "Category_ID")
    private Long categoryId;

}
