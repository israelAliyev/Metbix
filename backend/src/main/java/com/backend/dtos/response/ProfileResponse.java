package com.backend.dtos.response;

import com.backend.pojos.Companies;
import com.backend.pojos.Users;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProfileResponse {


    private String name;

    private Long companyId;

    private Long userId;

    private String companyEmail;

    private String userEmail;

    private Integer basketProductsCount;

    private String photo;
}
