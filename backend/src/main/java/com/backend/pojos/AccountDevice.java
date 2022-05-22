package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "account_device")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class AccountDevice implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Device_Type")
    private String deviceType;

    @Column(name = "Device_ID")
    private String deviceId;

    @Column(name = "Is_Refresh_Active")
    private Boolean isRefreshActive;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "User_ID", nullable = false)
    private Users user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Company_ID", nullable = false)
    private Companies company;

    @OneToOne(optional = false, mappedBy = "accountDevice")
    private RefreshToken refreshToken;

}
