package com.backend.dtos.response;


import com.backend.pojos.Companies;
import com.backend.pojos.ProductPictures;
import com.backend.pojos.ProductReviews;
import com.backend.pojos.Users;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Lob;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@ToString
@Getter
@Setter
@AllArgsConstructor
public class ProductsListResponse implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    private Long productId;

    private Float productPrice;

    private String productShortDesc;

    private String productLongDesc;

    private String coverPhoto;

    private Float rating;
}
