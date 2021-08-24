package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "product_reviews")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)public class ProductReviews {

    @Id
    @Column(name = "Review_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;

    @ManyToOne(fetch = FetchType.LAZY , targetEntity = Products.class)
    @JoinColumn(name = "Product_ID")
    private Products product;

    @Column(name = "Review_Title")
    private String reviewTitle;

    @Column(name = "Review_Description")
    private String reviewDescription;

    @Column(name = "Review_Rating")
    private Integer reviewRating;

    @Column(name = "Review_Date")
    private LocalDateTime reviewDate;

    @ManyToOne(fetch = FetchType.EAGER , targetEntity = Users.class)
    @JoinColumn(name = "User_ID")
    private Users user;

    @ManyToOne(fetch = FetchType.EAGER , targetEntity = Companies.class)
    @JoinColumn(name = "Company_ID")
    private Companies company;

}
