package com.backend.dtos.token;

import com.backend.pojos.EmailConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface ConfirmationTokenRepository
        extends JpaRepository<EmailConfirmationToken, Long> {

    Optional<EmailConfirmationToken> findByToken(String token);

    @Transactional
    @Modifying
    @Query("UPDATE EmailConfirmationToken e " +
            "SET e.confirmedDate = ?2 " +
            "WHERE e.token = ?1")
    int updateConfirmedAt(String token,
                          LocalDateTime confirmedAt);
}
