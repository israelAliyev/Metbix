package com.backend.dtos.request;

import com.backend.pojos.Roles;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationUserRequest {

    private String userName;

    private String userEmail;

    private String userPassword;

    private String encodedUserEmail;

    private String userCountry;

    private String userCity;

    private String userZip;

    private LocalDateTime userRegistrationDate;

    private String userAddress;

    private String userPhoto;

    private String userProfileBack;

    private String userPhone;

}
