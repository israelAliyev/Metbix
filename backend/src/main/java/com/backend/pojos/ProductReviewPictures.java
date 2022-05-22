package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "product_review_pictures")
@Getter
@Setter
public class ProductReviewPictures {
    @Id
    @Column(name = "picture_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pictureId;

    @Column(name = "picture_path")
    private String picturePath;

    @ManyToOne( fetch = FetchType.LAZY , cascade = {CascadeType.MERGE , CascadeType.PERSIST , CascadeType.REMOVE} , targetEntity = ProductReviews.class)
    @JoinColumn(name = "review_id")
    @JsonIgnore
    private ProductReviews review;

}
