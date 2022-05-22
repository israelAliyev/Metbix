package com.backend.controller;

import com.backend.dtos.request.LogOutRequest;
import com.backend.dtos.response.LoginForm;
import com.backend.dtos.request.TokenRefreshRequest;
import com.backend.event.OnAccountLogoutSuccessEvent;
import com.backend.exception.TokenRefreshException;
import com.backend.exception.UserLogoutException;
import com.backend.pojos.AccountDevice;
import com.backend.pojos.Companies;
import com.backend.pojos.RefreshToken;
import com.backend.pojos.Users;
import com.backend.repositories.RepositoryCompany;
import com.backend.repositories.RepositoryRole;
import com.backend.repositories.RepositoryUser;
import com.backend.response.ApiResponse;
import com.backend.response.JwtResponse;
import com.backend.response.AccountIdentityAvailability;
import com.backend.security.JwtProvider;
import com.backend.services.AccountDeviceService;
import com.backend.services.RefreshTokenService;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class AuthController {

    AuthenticationManager authenticationManager;

    RepositoryUser userRepository;
    RepositoryCompany repositoryCompany;

    RepositoryRole roleRepository;

    PasswordEncoder encoder;

    JwtProvider jwtProvider;

    private final RefreshTokenService refreshTokenService;

    private final AccountDeviceService accountDeviceService;

    private final ApplicationEventPublisher applicationEventPublisher;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/signing")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

        Users user = userRepository.findByUserEmail(loginRequest.getEmail());

        Companies company = repositoryCompany.findByCompanyEmail(loginRequest.getEmail());


        Boolean emailVerified = false;
        Boolean passwordCorrect = true;

        if (user != null) {
            emailVerified = user.getUserEmailVerified();

            if(!bCryptPasswordEncoder.matches(loginRequest.getPassword() , user.getUserPassword())){
                passwordCorrect = false;
                return ResponseEntity.ok().body(new ApiResponse(false, "Wrong password"));
            }

        } else if (company != null) {
            emailVerified = company.getCompanyEmailVerified();

            if(!bCryptPasswordEncoder.matches(loginRequest.getPassword() , company.getCompanyPassword())){
                passwordCorrect = false;
                return ResponseEntity.ok().body(new ApiResponse(false, "Wrong password"));
            }

        } else {
            return ResponseEntity.ok().body(new ApiResponse(false, "Email Not found"));
        }


        if (emailVerified && passwordCorrect) {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getPassword()
                    )
            );
            SecurityContextHolder.getContext().setAuthentication(authentication);

            if (user != null) {

                String jwtToken = jwtProvider.generateJwtTokenUserDetails(authentication);

                accountDeviceService.findByUserId(user.getUserId())
                        .map(AccountDevice::getRefreshToken)
                        .map(RefreshToken::getId)
                        .ifPresent(refreshTokenService::deleteById);

                AccountDevice userDevice = accountDeviceService.createUserDevice(loginRequest.getDeviceInfo());
                RefreshToken refreshToken = refreshTokenService.createRefreshToken();
                userDevice.setUser(user);
                userDevice.setRefreshToken(refreshToken);
                refreshToken.setAccountDevice(userDevice);
                refreshToken = refreshTokenService.save(refreshToken);

                return ResponseEntity.ok(new JwtResponse(jwtToken, refreshToken.getToken(), jwtProvider.getExpiryDuration()));

            } else {

                String jwtToken = jwtProvider.generateJwtTokenCompanyDetails(authentication);

                accountDeviceService.findByCompanyId(company.getCompanyId())
                        .map(AccountDevice::getRefreshToken)
                        .map(RefreshToken::getId)
                        .ifPresent(refreshTokenService::deleteById);

                AccountDevice companyDevice = accountDeviceService.createUserDevice(loginRequest.getDeviceInfo());
                RefreshToken refreshToken = refreshTokenService.createRefreshToken();
                companyDevice.setCompany(company);
                companyDevice.setRefreshToken(refreshToken);
                refreshToken.setAccountDevice(companyDevice);
                refreshToken = refreshTokenService.save(refreshToken);

                return ResponseEntity.ok(new JwtResponse(jwtToken, refreshToken.getToken(), jwtProvider.getExpiryDuration()));
            }
        }
        return ResponseEntity.ok().body(new ApiResponse(false, "Account has been deactivated/locked"));
    }


    @PostMapping("/refresh")
    public ResponseEntity<?> refreshJwtToken(@Valid @RequestBody TokenRefreshRequest tokenRefreshRequest) {

        String requestRefreshToken = tokenRefreshRequest.getRefreshToken();

        RefreshToken refreshTokenByToken = refreshTokenService.findByToken(requestRefreshToken).orElse(null);

        if(refreshTokenByToken.getAccountDevice().getUser() != null) {


            Optional<String> token = Optional.of(refreshTokenService.findByToken(requestRefreshToken)
                    .map(refreshToken -> {
//                        refreshTokenService.verifyExpiration(refreshToken);
                        accountDeviceService.verifyRefreshAvailability(refreshToken);
                        refreshTokenService.increaseCount(refreshToken);

                        return refreshToken;
                    })
                    .map(RefreshToken::getAccountDevice)
                    .map(AccountDevice::getUser)
                    .map(u -> jwtProvider.generateTokenFromUser(u))
                    .orElseThrow(() -> new TokenRefreshException(requestRefreshToken, "Missing refresh token in database.Please login again")));
            return ResponseEntity.ok().body(new JwtResponse(token.get(), tokenRefreshRequest.getRefreshToken(), jwtProvider.getExpiryDuration()));

        }else if(refreshTokenByToken.getAccountDevice().getCompany() != null){


            Optional<String> token = Optional.of(refreshTokenService.findByToken(requestRefreshToken)
                    .map(refreshToken -> {
//                        refreshTokenService.verifyExpiration(refreshToken);
                        accountDeviceService.verifyRefreshAvailability(refreshToken);
                        refreshTokenService.increaseCount(refreshToken);

                        return refreshToken;
                    })
                    .map(RefreshToken::getAccountDevice)
                    .map(AccountDevice::getCompany)
                    .map(c -> jwtProvider.generateTokenFromCompany(c))
                    .orElseThrow(() -> new TokenRefreshException(requestRefreshToken, "Missing refresh token in database.Please login again")));
            return ResponseEntity.ok().body(new JwtResponse(token.get(), tokenRefreshRequest.getRefreshToken(), jwtProvider.getExpiryDuration()));

        }else{

            return ResponseEntity.badRequest().body(new ApiResponse(false, "Token not found !!"));

        }

    }

    @GetMapping("/checkEmailAvailability")
    public AccountIdentityAvailability checkEmailAvailability(@RequestParam(value = "email") String email) {
        boolean isAvailableUser = !userRepository.existsByUserEmail(email);
        boolean isAvailableCompany = !repositoryCompany.existsByCompanyEmail(email);

        if (isAvailableUser){
            return new AccountIdentityAvailability(true);
        }else
            if(isAvailableCompany){

                return new AccountIdentityAvailability(true);
            } else{

                return new AccountIdentityAvailability(false);
            }
    }


    @PostMapping("/logout")
    public ResponseEntity<ApiResponse> logoutUser( @Valid @RequestBody LogOutRequest logOutRequest) {

        String deviceId = logOutRequest.getDeviceInfo().getDeviceId();

        if(userRepository.findByUserEmail(logOutRequest.getEmail()) != null){

            AccountDevice userDevice = accountDeviceService.findByUserId(logOutRequest.getAccountId())
                    .filter(device -> device.getDeviceId().equals(deviceId))
                    .orElseThrow(() -> new UserLogoutException(logOutRequest.getDeviceInfo().getDeviceId(), "Invalid device Id supplied. No matching device found for the given user "));

            refreshTokenService.deleteById(userDevice.getRefreshToken().getId());

            OnAccountLogoutSuccessEvent logoutSuccessEvent = new OnAccountLogoutSuccessEvent(logOutRequest.getEmail(), logOutRequest.getToken(), logOutRequest);

            applicationEventPublisher.publishEvent(logoutSuccessEvent);

            return ResponseEntity.ok(new ApiResponse(true, "User has successfully logged out from the system!"));



        }else if(repositoryCompany.findByCompanyEmail(logOutRequest.getEmail()) != null){

            AccountDevice userDevice = accountDeviceService.findByCompanyId(logOutRequest.getAccountId())
                    .filter(device -> device.getDeviceId().equals(deviceId))
                    .orElseThrow(() -> new UserLogoutException(logOutRequest.getDeviceInfo().getDeviceId(), "Invalid device Id supplied. No matching device found for the given user "));

            refreshTokenService.deleteById(userDevice.getRefreshToken().getId());

            OnAccountLogoutSuccessEvent logoutSuccessEvent = new OnAccountLogoutSuccessEvent(logOutRequest.getEmail(), logOutRequest.getToken(), logOutRequest);

            applicationEventPublisher.publishEvent(logoutSuccessEvent);

            return ResponseEntity.ok(new ApiResponse(true, "User has successfully logged out from the system!"));

        }else{

            return ResponseEntity.ok(new ApiResponse(false, "Account nat found"));

        }

    }
}






