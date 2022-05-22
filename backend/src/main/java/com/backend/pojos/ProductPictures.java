package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "product_pictures")
@Getter
@Setter
public class ProductPictures implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Picture_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pictureId;

    @Column(name = "Picture_Path")
    private String picturePath;

    @ManyToOne(cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE} , fetch = FetchType.LAZY, targetEntity = Products.class)
    @JoinColumn(name = "Product_ID")
    @JsonIgnore
    private Products product;
}
