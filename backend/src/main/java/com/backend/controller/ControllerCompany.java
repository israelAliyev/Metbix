package com.backend.controller;

import com.backend.pojos.Companies;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
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

    @GetMapping("/info/{id}")
    public Companies getCompanyInfo(@PathVariable("id") Long id){

        return serviceCompany.getCompanyInfo(id);
    }

    @PostMapping("/{id}/saveRequestProduct/{productId}")
    public void saveRequestProduct(@PathVariable("id") Long id , @PathVariable("productId") Long productId) {

        serviceCompany.saveComapnysRequestProduct(id , productId);
    }


}
