package com.backend.dtos.request;

import com.backend.pojos.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@ToString
@Getter
@Setter
public class ProductsFilterRequest {

    private Long rating;
    private String condition;
    private Boolean warranty;
    private Boolean domestic;
    private Boolean international;
    private Integer year;
    private Integer minPrice;
    private Integer maxPrice;
    private Long brandId;
    private Long modelId;
    private String sortBy;

    private OptionsRequest options;

    private List<Products> products = new ArrayList<Products>();

}
