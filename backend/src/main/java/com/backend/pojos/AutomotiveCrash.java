package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "automotive_crash")
@Getter
@Setter
public class AutomotiveCrash implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Crash_ID")
    private Long crashId;

    @Column(name = "Crash")
    private String crash;

    @Column(name = "Category_ID")
    private Long categoryId;

}
