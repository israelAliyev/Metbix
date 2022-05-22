package com.backend.dtos.request;


import com.backend.pojos.ProductReviewPictures;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@ToString
public class EvaluateProductRequest {

    private Long productId;
    private String reviewTitle;
    private String reviewDescription;
    private Integer reviewRating;
    private LocalDateTime reviewDate = LocalDateTime.now();
    private List<ProductReviewPictures> reviewPictures = null;

}
