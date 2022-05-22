package com.backend.security;


import com.backend.pojos.Users;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class UserDetailsService
        implements UserDetails {

    private final Users user;

    public UserDetailsService(Users user) {
        super();
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        if (user.getUserEmail() != null || user.getUserPassword() != null) {

            return Collections.singleton(new SimpleGrantedAuthority(user.getUserRole().getRoleName()));

        } else {

            throw new UsernameNotFoundException("User not found");
        }
    }


    @Override
    public String getUsername() {
        return user.getUserName();
    }


    public String getEmail() {
        return user.getUserEmail();
    }

    public Long getId() {
        return user.getUserId();
    }

    @Override
    public String getPassword() {
        return user.getUserPassword();
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {

        return user.getUserEmailVerified();
    }
}
