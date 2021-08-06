package com.backend.controller;


import com.backend.pojos.Roles;
import com.backend.pojos.Users;
import com.backend.repositories.RepositoryRole;
import com.backend.repositories.RepositoryUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("")
@CrossOrigin("*")
public class TestController {


    @Autowired
    private RepositoryUser repositoryUser;

    @Autowired
    private RepositoryRole repositoryRole;

    @GetMapping("")
    public Boolean welcome() {
//
//        Users user = new Users();
//        user.setUserEmail("12321");
//        user.setUserPassword("123123");
//        user.setUserName("2342");
//
//        Roles role = repositoryRole.findById(2).orElse(null);
//
//        user.setUserRole(role);
//
//        repositoryUser.save(user);

        return repositoryUser.findByUserEmail("qas").getUserEmailVerified();
    }

    @GetMapping("/test")
    public String testText() {
        return "This is text";
    }

    @GetMapping("/fail_login")
    public String failLogin() {

        System.out.println("Login Fail");

        return "Login Fail";
    }

}
