package com.backend.controller;


import com.backend.dtos.request.UpdateUserRequest;
import com.backend.dtos.response.ProfileResponse;
import com.backend.dtos.response.UserResponse;
import com.backend.pojos.Companies;
import com.backend.pojos.Users;
import com.backend.services.ServiceUser;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("api/user")
@AllArgsConstructor
@CrossOrigin("*")
public class ControllerUser {

    private final ServiceUser serviceUser;

    @GetMapping("/info/{id}")
    public UserResponse getUserInfo(@PathVariable("id") Long id){

        return serviceUser.getUserInfo(id);
    }

    @GetMapping("/info-by-email/{email}")
    public UserResponse getUserInfoByEmail(@PathVariable("email") String email){

        return serviceUser.getUserInfoByEmail(email);
    }


    @PostMapping("/{id}/saveRequestProduct/{productId}")
    public void saveRequestProduct(@PathVariable("id") Long id , @PathVariable("productId") Long productId) {

       serviceUser.saveUsersRequestProduct(id , productId);
    }

    @PostMapping("/update/{id}")
    public void updateUser(@PathVariable("id") Long id , @RequestBody UpdateUserRequest request) {

        serviceUser.updateUser(id , request);
    }


    @GetMapping("/get-profile-by-email/{email}")
    public ProfileResponse getProfileByEmail(@PathVariable("email") String email) {

        return serviceUser.getProfileByEmail(email);
    }



    @GetMapping("/search-by-name/{name}")
    public Set<Users> getUsersByName(@PathVariable("name") String name){

        return serviceUser.getByUserName(name);
    }
}
