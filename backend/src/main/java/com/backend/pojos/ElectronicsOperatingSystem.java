package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_operating_system")
@Getter
@Setter
public class ElectronicsOperatingSystem implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Operating_System_ID")
    private Long operatingSystemId;

    @Column(name = "Operating_System")
    private String operatingSystem;

    @Column(name = "Category_ID")
    private Long categoryId;

}
