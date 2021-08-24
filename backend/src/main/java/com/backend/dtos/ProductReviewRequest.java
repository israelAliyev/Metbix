package com.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class ProductReviewRequest {

    private String reviewTitle;
    private String reviewDescription;
    private Integer reviewRating;
    private String ReviewAccountName;
    private LocalDateTime ReviewDate;

}
