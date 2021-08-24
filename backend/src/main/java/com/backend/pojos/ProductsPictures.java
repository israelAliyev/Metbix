package com.backend.pojos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@Entity
@Table(name = "products_pictures")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
public class ProductsPictures {

    @Id
    @Column(name = "Picture_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pictureId;

    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Products.class)
    @JoinColumn(name = "Product_ID")
    private Products product;

    @Column(name = "Picture_Path")
    private String picturePath;

}
