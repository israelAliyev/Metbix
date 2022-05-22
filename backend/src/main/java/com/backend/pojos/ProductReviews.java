package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "product_reviews")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class ProductReviews implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Review_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne(fetch = FetchType.LAZY , targetEntity = Products.class , cascade = {CascadeType.MERGE , CascadeType.PERSIST , CascadeType.REMOVE})
    @JoinColumn(name = "Product_ID")
    @JsonIgnore
    private Products product;

    @Column(name = "Review_Title")
    private String reviewTitle;

    @Column(name = "Review_Description")
    private String reviewDescription;

    @Column(name = "Review_Rating")
    private Integer reviewRating;

    @Column(name = "Review_Date")
    private LocalDateTime reviewDate;

    @OneToMany( fetch = FetchType.LAZY , cascade = {CascadeType.MERGE , CascadeType.PERSIST , CascadeType.REMOVE} , targetEntity = ProductReviewPictures.class , mappedBy = "review")
    private List<ProductReviewPictures> reviewPictures;

}
