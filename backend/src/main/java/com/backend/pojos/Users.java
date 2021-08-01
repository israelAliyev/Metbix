package com.backend.pojos;

import lombok.Data;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.util.List;

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

    @Column(name = "User_VerificationCode")
    private String userVerificationCode;

    @Column(name = "User_RegistrationDate")
    @Temporal(TemporalType.TIMESTAMP)
    private java.sql.Timestamp userRegistrationDate;

    @Column(name = "User_UpdateDate")
    @Temporal(TemporalType.TIMESTAMP)
    private java.sql.Timestamp userUpdateDate;

    @Column(name = "User_IP")
    private String userIp;

    @Column(name = "User_Address")
    private String userAddress;

    @Column(name = "User_Address2")
    private String userAddress2;

    @Column(name = "User_Role" , nullable = false)
    @JoinColumn(name = "User_Role", table = "Users")
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = Roles.class)
    private Roles userRole;

    @Column(name = "User_Photo")
    private String userPhoto;

    @Column(name = "User_Phone")
    private String userPhone;

    @Column(name = "User_EmailVerified")
    private Byte userEmailVerified;

    @Column(name = "User_Profile_Back")
    private String userProfileBack;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class , orphanRemoval = true)
    @JoinTable(name = "II_users_products",
            joinColumns = {@JoinColumn(name = "User_ID")},

            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    private List<Products> products;
}
