package com.backend.dtos.request;


import com.backend.pojos.Products;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class UpdateUserRequest {

    private String userPassword;

    private String userName;

    private String userCity;

    private String userCountry;

    private String userZip;


    private String userAddress;

    private String userAddress2;

    private String userPhoto;

    private String userPhone;

    private String userProfileBack;


    private Set<Products> products = new HashSet<Products>();


    private Set<Products> basketProducts = new HashSet<Products>();


}
