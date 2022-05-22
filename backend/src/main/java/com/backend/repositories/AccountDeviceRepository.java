package com.backend.repositories;

import com.backend.pojos.AccountDevice;
import com.backend.pojos.RefreshToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AccountDeviceRepository extends JpaRepository<AccountDevice, Long> {


    @Override
    Optional<AccountDevice> findById(Long id);

    Optional<AccountDevice> findByRefreshToken(RefreshToken refreshToken);

    @Query("select a from AccountDevice a where a.user.userId = :userId")
    Optional<AccountDevice> findByUserId(@Param("userId") Long userId);

    @Query("select a from AccountDevice a where a.company.companyId = :companyId")
    Optional<AccountDevice> findByCompanyId(@Param("companyId") Long companyId);
}
