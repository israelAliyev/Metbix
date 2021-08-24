package com.backend.dtos;

import com.backend.pojos.Roles;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationUserRequest {

    private String userEmail;

    private String userPassword;

    private String userName;

    private String userCity;

    private String userCountry;

    private String userZip;

    private LocalDateTime userRegistrationDate;

    private String userIp;

    private String userAddress;

    private String userAddress2;

    private String userPhoto;

    private String userPhone;

//    private Boolean userEmailVerified;

    private String userProfileBack;

    private Long userRole;



}
