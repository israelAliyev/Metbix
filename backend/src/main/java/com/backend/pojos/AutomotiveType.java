package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "automotive_type")
@Getter
@Setter
public class AutomotiveType {
    @Id
    @Column(name = "Type_ID")
    private Long typeId;

    @Column(name = "Type")
    private String type;

    @Column(name = "Category_ID")
    private Long categoryId;

}
