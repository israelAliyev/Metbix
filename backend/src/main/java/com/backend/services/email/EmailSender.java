package com.backend.services.email;

import org.springframework.stereotype.Repository;


public interface EmailSender {

    public void send(String to , String mail);
}
