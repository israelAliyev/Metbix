package com.backend.event.listener;

import com.backend.cache.LoggedOutJwtTokenCache;
import com.backend.dtos.response.DeviceInfo;
import com.backend.event.OnAccountLogoutSuccessEvent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class OnAccountLogoutSuccessEventListener implements ApplicationListener<OnAccountLogoutSuccessEvent> {

    private final LoggedOutJwtTokenCache tokenCache;
    private static final Logger logger = LoggerFactory.getLogger(OnAccountLogoutSuccessEventListener.class);

    @Autowired
    public OnAccountLogoutSuccessEventListener(LoggedOutJwtTokenCache tokenCache) {
        this.tokenCache = tokenCache;
    }

    public void onApplicationEvent(OnAccountLogoutSuccessEvent event) {
        if (null != event) {
            DeviceInfo deviceInfo = event.getLogOutRequest().getDeviceInfo();
            logger.info(String.format("Log out success event received for user [%s] for device [%s]", event.getUserEmail(), deviceInfo));
            tokenCache.markLogoutEventForToken(event);
        }
    }
}
