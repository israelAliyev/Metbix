package com.backend.services;

import com.backend.dtos.RegistrationUserRequest;
import com.backend.dtos.UpdateUserRequest;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import org.springframework.data.relational.core.sql.In;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ServiceUser {

    void saveUsersRequestProduct(Long id , Long productId);

    void saveUsersBasketProduct(Long id , Long productId);

    Users getUserInfo(Long id);

    void updateUser(Long id, UpdateUserRequest request);

}
