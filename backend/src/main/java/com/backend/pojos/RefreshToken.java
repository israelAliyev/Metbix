package com.backend.pojos;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.time.Instant;

@Entity
@Table(name = "refresh_token")
@Getter
@Setter
public class RefreshToken implements Serializable {

    private static final long serialVersionUID = 214321321421L;


    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @Column(name = "Expiry_Date")
//    private Instant expiryDate;

    @Column(name = "Refresh_Count")
    private Long refreshCount;

    @Column(name = "Token")
    private String token;

    @OneToOne(optional = false, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinColumn(name = "Account_Device_Id", unique = true)
    private AccountDevice accountDevice;

    public void incrementRefreshCount() {
        refreshCount = refreshCount + 1;
    }


}
