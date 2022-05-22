package com.backend.controller;

import com.backend.dtos.response.CompanyResponse;
import com.backend.pojos.Companies;
import com.backend.pojos.Products;
import com.backend.pojos.Users;
import com.backend.services.ServiceCompany;
import com.backend.services.ServiceUser;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Service;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/company")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ControllerCompany {

    private final ServiceCompany serviceCompany;

    @GetMapping("/info/{id}")
    public CompanyResponse getCompanyInfo(@PathVariable("id") Long id){

        return serviceCompany.getCompanyInfo(id);
    }

    @GetMapping("/info-by-email/{email}")
    public CompanyResponse getCompanyInfoByEmail(@PathVariable("email") String email){

        return serviceCompany.getCompanyInfoByEmail(email);
    }

    @PostMapping("/{id}/saveRequestProduct/{productId}")
    public void saveRequestProduct(@PathVariable("id") Long id , @PathVariable("productId") Long productId) {

        serviceCompany.saveComapnysRequestProduct(id , productId);
    }

    @GetMapping("/search-by-name/{name}")
    public Set<Companies> getCompaniesByName(@PathVariable("name") String name){

        return serviceCompany.getByCompaniesName(name);
    }

}
