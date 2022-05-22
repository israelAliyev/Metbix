package com.backend.security;

import com.backend.cache.LoggedOutJwtTokenCache;
import com.backend.event.OnAccountLogoutSuccessEvent;
import com.backend.exception.InvalidTokenRequestException;
import com.backend.pojos.Companies;
import com.backend.pojos.Users;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.Date;

@Component
public class JwtProvider {

    private static final Logger logger = LoggerFactory.getLogger(JwtProvider.class);
    
    @Autowired
    private LoggedOutJwtTokenCache loggedOutJwtTokenCache;
 
    public String generateJwtTokenUserDetails(Authentication authentication) {
 
        UserDetailsService userPrincipal = (UserDetailsService) authentication.getPrincipal();
        
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 3660000);
 
        return Jwts.builder()
                    .setSubject((userPrincipal.getEmail()))
                    .setIssuer("UserDetails")
                    .setId(Long.toString(userPrincipal.getId()))
                    .setIssuedAt(new Date())
                    .setExpiration(expiryDate)
                    .signWith(SignatureAlgorithm.HS512, "fsjmetbixisi")
                    .compact();
    }


    public String generateJwtTokenCompanyDetails(Authentication authentication) {

        CompanyDetailsService companyPrincipal = (CompanyDetailsService) authentication.getPrincipal();

        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 3660000);

        return Jwts.builder()
                .setSubject((companyPrincipal.getEmail()))
                .setIssuer("CompanyDetails")
                .setId(Long.toString(companyPrincipal.getId()))
                .setIssuedAt(new Date())
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, "fsjmetbixisi")
                .compact();
    }

    public String generateTokenFromUser(Users user) {
        Instant expiryDate = Instant.now().plusMillis(3660000);
        return Jwts.builder()
                .setSubject(user.getUserEmail())
                .setIssuer("User")
                .setId(Long.toString(user.getUserId()))
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(expiryDate))
                .signWith(SignatureAlgorithm.HS512, "fsjmetbixisi")
                .compact();
    }


    public String generateTokenFromCompany(Companies company) {
        Instant expiryDate = Instant.now().plusMillis(3660000);
        return Jwts.builder()
                .setSubject(company.getCompanyEmail())
                .setIssuer("Company")
                .setId(Long.toString(company.getCompanyId()))
                .setIssuedAt(Date.from(Instant.now()))
                .setExpiration(Date.from(expiryDate))
                .signWith(SignatureAlgorithm.HS512, "fsjmetbixisi")
                .compact();
    }
 
    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser()
                      .setSigningKey("fsjmetbixisi")
                      .parseClaimsJws(token)
                      .getBody().getSubject();
    }
    
    public Date getTokenExpiryFromJWT(String token) {
        Claims claims = Jwts.parser()
                .setSigningKey("fsjmetbixisi")
                .parseClaimsJws(token)
                .getBody();

        return claims.getExpiration();
    }
 
    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey("fsjmetbixisi").parseClaimsJws(authToken);
            validateTokenIsNotForALoggedOutDevice(authToken);
            return true;
        } catch (MalformedJwtException e) {
            logger.error("Invalid JWT token -> Message: {}", e);
        } catch (ExpiredJwtException e) {
            logger.error("Expired JWT token -> Message: {}", e);
        } catch (UnsupportedJwtException e) {
            logger.error("Unsupported JWT token -> Message: {}", e);
        } catch (IllegalArgumentException e) {
            logger.error("JWT claims string is empty -> Message: {}", e);
        }
        
        return false;
    }
    
    private void validateTokenIsNotForALoggedOutDevice(String authToken) {
        OnAccountLogoutSuccessEvent previouslyLoggedOutEvent = loggedOutJwtTokenCache.getLogoutEventForToken(authToken);
        if (previouslyLoggedOutEvent != null) {
            String userEmail = previouslyLoggedOutEvent.getUserEmail();
            Date logoutEventDate = previouslyLoggedOutEvent.getEventTime();
            String errorMessage = String.format("Token corresponds to an already logged out user [%s] at [%s]. Please login again", userEmail, logoutEventDate);
            throw new InvalidTokenRequestException("JWT", authToken, errorMessage);
        }
    }
    
    public long getExpiryDuration() {
        return 3600000;
    }


}
