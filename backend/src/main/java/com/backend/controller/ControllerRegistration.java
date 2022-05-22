package com.backend.controller;


import com.backend.dtos.request.RegistrationCompanyRequest;
import com.backend.dtos.request.RegistrationUserRequest;
import com.backend.services.ServiceRegistration;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/registration")
@CrossOrigin("*")
@AllArgsConstructor
public class ControllerRegistration {


    private final ServiceRegistration serviceRegistration;

    @PostMapping("/user")
    public String registerUser(@RequestBody RegistrationUserRequest request) {
        return serviceRegistration.registerUser(request);
    }

    @PostMapping("/company")
    public String registerCompany(@RequestBody RegistrationCompanyRequest request) {
        return serviceRegistration.registerCompany(request);
    }


    @GetMapping(path = "/confirm")
    public String confirm(@RequestParam("token") String token) {
        return serviceRegistration.confirmToken(token);
    }

}
