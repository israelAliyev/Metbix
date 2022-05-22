package com.backend.controller;


import com.backend.dtos.response.CompanyResponse;
import com.backend.dtos.response.ProductsListResponse;
import com.backend.pojos.*;
import com.backend.repositories.*;
import com.backend.repositories.options.RepositoryAutomotiveDistanceTraveledsRange;
import com.backend.repositories.options.RepositoryElectronicsBatteryRange;
import com.backend.repositories.options.RepositoryElectronicsScreenSizeRange;
import com.backend.repositories.options.RepositoryProductColors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@RestController
@RequestMapping("api/test/con")
@CrossOrigin("*")
public class TestController {


    @Autowired
    private RepositoryUser repositoryUser;

    @Autowired
    private RepositoryRole repositoryRole;

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    RepositoryDepartments repositoryDepartments;

    @Autowired
    RepositoryCompany repository;


    @GetMapping("/dep")
    public Set<Companies> welcome() {



        return repository.getByCompaniesName("isi");
    }


//    @GetMapping("/wfs")
//    public Boolean welcome() {
//
//        return repositoryUser.findByUserEmail("qas").orElse(null).getUserEmailVerified();
//    }

//    @GetMapping("/test")
//    public String testText() {
//        return "This is text";
//    }

//    @PostMapping("/signin")
//    public void authenticateUser(@RequestBody LoginForm loginRequest) {
//
//        Users user = repositoryUser.findByUserEmail(loginRequest.getEmail());
//
//
//        Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            loginRequest.getEmail(),
//                            loginRequest.getPassword()
//                    )
//            );
//
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//
//    }


}
