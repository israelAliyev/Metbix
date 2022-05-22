package com.backend.dtos.response;


import lombok.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LoginForm {

    @NotBlank
    @Size(min=3, max = 60)
    private String email;

    private String password;

    @Valid
    @NotNull(message = "Device info cannot be null")
    private DeviceInfo deviceInfo;

}