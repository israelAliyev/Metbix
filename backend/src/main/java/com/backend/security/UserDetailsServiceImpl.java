package com.backend.security;

import com.backend.dtos.token.ConfirmationTokenService;
import com.backend.pojos.EmailConfirmationToken;
import com.backend.pojos.Users;
import com.backend.repositories.RepositoryUser;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;


@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private RepositoryUser repositoryUser;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Users user = repositoryUser.findByUserEmail(email);

        if (repositoryUser == null) {
            throw new UsernameNotFoundException("Email " + email + " not found");
        } else {
            return new com.backend.security.UserDetails(user);

        }
    }

    public String signUpUser(Users user) {

        Users userExists = repositoryUser.findByUserEmail(user.getUserEmail());


        if (userExists != null) {
            // TODO check of attributes are the same and
            // TODO if email not confirmed send confirmation email.

            throw new IllegalStateException("email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(user.getUserPassword());

        user.setUserPassword(encodedPassword);

        repositoryUser.save(user);


        String token = UUID.randomUUID().toString();

        EmailConfirmationToken confirmationToken = new EmailConfirmationToken();

        confirmationToken.setToken(token);
        confirmationToken.setUser(user);
        confirmationToken.setCreatedDate(LocalDateTime.now());
        confirmationToken.setExpiredDate(LocalDateTime.now().plusMinutes(15));

        confirmationTokenService.saveConfirmationToken(confirmationToken);

//        TODO: SEND EMAIL

        return token;

    }

    public void enableAppUser(String userEmail) {
        repositoryUser.enableAppUser(userEmail);
    }
}
