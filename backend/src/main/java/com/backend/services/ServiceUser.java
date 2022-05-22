package com.backend.services;

import com.backend.dtos.request.UpdateUserRequest;
import com.backend.dtos.response.ProfileResponse;
import com.backend.dtos.response.UserResponse;
import com.backend.pojos.Users;

import java.util.Set;

public interface ServiceUser {

    void saveUsersRequestProduct(Long id, Long productId);

    void saveUsersBasketProduct(Long id, Long productId);

    UserResponse getUserInfo(Long id);

    UserResponse getUserInfoByEmail(String email);

    void updateUser(Long id, UpdateUserRequest request);

    ProfileResponse getProfileByEmail(String email);

    Set<Users> getByUserName(String name);

}
