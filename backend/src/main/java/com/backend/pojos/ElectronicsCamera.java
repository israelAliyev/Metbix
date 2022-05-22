package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_camera")
@Getter
@Setter
public class ElectronicsCamera implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Camera_ID")
    private Long cameraId;

    @Column(name = "Camera_MP")
    private String cameraMp;

    @Column(name = "Category_ID")
    private Long categoryId;


}
