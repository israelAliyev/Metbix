package com.backend.dtos.token;

import com.backend.pojos.EmailConfirmationToken;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ConfirmationTokenService {

    private final ConfirmationTokenRepository confirmationTokenRepository;

    public void saveConfirmationToken(EmailConfirmationToken token) {
        confirmationTokenRepository.save(token);
    }

    public Optional<EmailConfirmationToken> getToken(String token) {
        return confirmationTokenRepository.findByToken(token);
    }

    public int setConfirmedDate(String token) {
        return confirmationTokenRepository.updateConfirmedAt(
                token, LocalDateTime.now());
    }
}
