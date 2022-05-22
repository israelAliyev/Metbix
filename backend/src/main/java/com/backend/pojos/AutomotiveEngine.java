package com.backend.pojos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "automotive_engine")
@Getter
@Setter
public class AutomotiveEngine implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Engine_ID")
    private Long engineId;

    @Column(name = "Engine")
    private String engine;

    @Column(name = "Category_ID")
    private Long categoryId;

}
