package com.backend.security;

import com.backend.pojos.Companies;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;
import java.util.Collections;

public class CompanyDetailsService implements org.springframework.security.core.userdetails.UserDetails {

    private final Companies company;

    public CompanyDetailsService(Companies company) {
        super();
        this.company = company;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if (company.getCompanyEmail() != null || company.getCompanyPassword() != null) {

            return Collections.singleton(new SimpleGrantedAuthority(company.getCompanyRole().getRoleName()));
        }

        else {
            throw new UsernameNotFoundException("User not found");

        }
    }

    public Long getId() {
        return company.getCompanyId();
    }


    @Override
    public String getPassword() {
        return company.getCompanyPassword();
    }

    @Override
    public String getUsername() {
        return company.getCompanyName();
    }


    public String getEmail() {
        return company.getCompanyEmail();
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
        return company.getCompanyEmailVerified();
    }
}
