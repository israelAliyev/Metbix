package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
@Data
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Users {

    @Id
    @Column(name = "User_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "User_Email")
    private String userEmail;

    @Column(name = "User_Password")
    private String userPassword;

    @Column(name = "User_Name")
    private String userName;

    @Column(name = "User_City")
    private String userCity;

    @Column(name = "User_Country")
    private String userCountry;

    @Column(name = "User_Zip")
    private String userZip;

    @Column(name = "user_verification_code")
    private String userVerificationCode;

    @Column(name = "user_registration_date")
    private LocalDateTime userRegistrationDate;

    @Column(name = "user_update_date")
    private LocalDateTime userUpdateDate;

    @Column(name = "User_IP")
    private String userIp;

    @Column(name = "User_Address")
    private String userAddress;

    @Column(name = "User_Address2")
    private String userAddress2;

    @Column(name = "User_Photo")
    private String userPhoto;

    @Column(name = "User_Phone")
    private String userPhone;

    @Column(name = "User_Email_Verified" , columnDefinition="tinyint(1) default 1")
    private Boolean userEmailVerified = false;

    @Column(name = "User_Profile_Back")
    private String userProfileBack;


    @JoinColumn(name = "User_Role", table = "Users", nullable = false)
    @ManyToOne(fetch = FetchType.LAZY)
    private Roles userRole;


    @OneToMany(fetch = FetchType.EAGER, targetEntity = Products.class , orphanRemoval = true)
    @JoinTable(name = "II_users_products",
            joinColumns = {@JoinColumn(name = "User_ID")},

            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    private Set<Products> products = new HashSet<Products>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Products.class)
    @JoinTable(name = "II_users_request_products",
            joinColumns = {@JoinColumn(name = "User_ID")},

            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    private Set<Products> requestProducts = new HashSet<Products>();


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Products.class)
    @JoinTable(name = "II_users_basket",
            joinColumns = {@JoinColumn(name = "User_ID")},

            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    private Set<Products> basketProducts = new HashSet<Products>();
}
