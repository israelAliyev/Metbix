package com.backend.controller;


import com.backend.dtos.RegistrationRequest;
import com.backend.services.ServiceRegistration;
import lombok.AllArgsConstructor;
import org.hibernate.service.ServiceRegistry;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/registration")
@CrossOrigin("*")
@AllArgsConstructor
public class ControllerRegistration {


    private final ServiceRegistration serviceRegistration;

    @PostMapping
    public String register(@RequestBody RegistrationRequest request) {
        return serviceRegistration.register(request);
    }


    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return serviceRegistration.confirmToken(token);
    }

}
