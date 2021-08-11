package com.backend.controller;


import com.backend.pojos.Products;
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


    @GetMapping("/{id}/products")
    public List<Products> getUsersProducts(@PathVariable("id") Long id) {

        return serviceUser.getUsersProducts(id);
    }

    @GetMapping("/{id}/requestProducts")
    public List<Products> getUsersRequestProducts(@PathVariable("id") Integer id) {

        return serviceUser.getUsersRequestProducts(id);
    }


    @PostMapping("/{id}/saveRequestProduct/{productId}")
    public void saveRequestProduct(@PathVariable("id") Integer id , @PathVariable("productId") Integer productId) {

       serviceUser.saveUsersRequestProduct(id , productId);
    }


}
