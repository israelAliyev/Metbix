package com.backend.dtos.response;

import com.backend.pojos.Products;
import com.backend.pojos.Users;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.HashSet;
import java.util.Set;

@ToString
@Getter
@Setter
public class UserResponse {

    private Users user;
    private Set<Products> products = new HashSet<Products>();
    private Set<Products> requestProducts = new HashSet<Products>();
    private Set<Products> basketProducts = new HashSet<Products>();

}
