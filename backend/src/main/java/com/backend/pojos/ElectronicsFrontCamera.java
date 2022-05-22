package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_front_camera")
@Getter
@Setter
public class ElectronicsFrontCamera implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Front_Camera_ID")
    private Long frontCameraId;

    @Column(name = "Front_Camera")
    private String frontCamera;

    @Column(name = "Category_ID")
    private Long categoryId;

}
