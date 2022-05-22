package com.backend.dtos.request;

import com.backend.dtos.response.DeviceInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LogOutRequest {

    @Valid
    @NotNull(message = "Device info cannot be null")
    private DeviceInfo deviceInfo;
    
    @Valid
    @NotNull(message = "Existing Token needs to be passed")
    private String token;

    @NotNull(message = "Account Email needs to be passed")
    private String email;


    @NotNull(message = "Account Id needs to be passed")
    private Long accountId;
}

