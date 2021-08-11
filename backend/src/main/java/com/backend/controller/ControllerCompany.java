package com.backend.controller;

import com.backend.pojos.Products;
import com.backend.services.ServiceCompany;
import com.backend.services.ServiceUser;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Service;
import java.util.List;

@RestController
@RequestMapping("company")
@AllArgsConstructor
@CrossOrigin("*")
public class ControllerCompany {

    private final ServiceCompany serviceCompany;


    @GetMapping("/{id}/products")
    public List<Products> getUsersProducts(@PathVariable("id") Long id) {

        return serviceCompany.getComapnysProducts(id);
    }


    @GetMapping("/{id}/requestProducts")
    public List<Products> getUsersRequestProducts(@PathVariable("id") Integer id) {

        return serviceCompany.getComapnysRequestProducts(id);
    }


    @PostMapping("/{id}/saveRequestProduct/{productId}")
    public void saveRequestProduct(@PathVariable("id") Integer id , @PathVariable("productId") Integer productId) {

        serviceCompany.saveComapnysRequestProduct(id , productId);
    }


}
