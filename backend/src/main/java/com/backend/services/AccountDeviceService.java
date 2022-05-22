package com.backend.services;


import com.backend.dtos.response.DeviceInfo;
import com.backend.exception.TokenRefreshException;
import com.backend.pojos.AccountDevice;
import com.backend.pojos.RefreshToken;
import com.backend.repositories.AccountDeviceRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class AccountDeviceService {

    private final AccountDeviceRepository accountDeviceRepository;

    public Optional<AccountDevice> findByUserId(Long userId) {
        return accountDeviceRepository.findByUserId(userId);
    }

    public Optional<AccountDevice> findByCompanyId(Long companyId) {
        return accountDeviceRepository.findByCompanyId(companyId);
    }

    public Optional<AccountDevice> findByRefreshToken(RefreshToken refreshToken) {
        return accountDeviceRepository.findByRefreshToken(refreshToken);
    }

    public AccountDevice createUserDevice(DeviceInfo deviceInfo) {
        AccountDevice userDevice = new AccountDevice();
        userDevice.setDeviceId(deviceInfo.getDeviceId());
        userDevice.setDeviceType(deviceInfo.getDeviceType());
        userDevice.setIsRefreshActive(true);
        return userDevice;
    }

    public void verifyRefreshAvailability(RefreshToken refreshToken) {
        AccountDevice userDevice = findByRefreshToken(refreshToken)
                .orElseThrow(() -> new TokenRefreshException(refreshToken.getToken(), "No device found for the matching token. Please login again"));

        if (!userDevice.getIsRefreshActive()) {
            throw new TokenRefreshException(refreshToken.getToken(), "Refresh blocked for the device. Please login through a different device");
        }
    }
}
