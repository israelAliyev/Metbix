package com.backend.controller;


import com.backend.dtos.UpdateUserRequest;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import com.backend.services.ServiceUser;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
@AllArgsConstructor
@CrossOrigin("*")
public class ControllerUser {

    private final ServiceUser serviceUser;

    @GetMapping("/info/{id}")
    public Users getUserInfo(@PathVariable("id") Long id){

        return serviceUser.getUserInfo(id);
    }


    @PostMapping("/{id}/saveRequestProduct/{productId}")
    public void saveRequestProduct(@PathVariable("id") Long id , @PathVariable("productId") Long productId) {

       serviceUser.saveUsersRequestProduct(id , productId);
    }

    @PostMapping("/{id}")
    public void saveRequestProduct(@PathVariable("id") Long id , @RequestBody UpdateUserRequest request) {

        serviceUser.updateUser(id , request);
    }


}
