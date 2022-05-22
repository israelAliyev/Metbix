package com.backend.dtos.request;

import lombok.Data;
import org.springframework.data.domain.PageRequest;

@Data
public class ProductsSearchRequest {

    private String keyword;
    private Integer review;
    private String status;
    private Boolean warranty;
    private Boolean domestic;
    private Boolean international;
    private Integer year;
    private Integer minPrice;
    private Integer maxPrice;
    private String sortBy;
    private String direction;
    private Integer pageNumber;
    private Integer pageSize;
}
