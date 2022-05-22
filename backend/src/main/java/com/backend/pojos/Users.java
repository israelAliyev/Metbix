package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Users implements Serializable {

    private static final long serialVersionUID = 214321321421L;

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

    @Column(name = "User_Ratings_Count")
    private Integer userRatingsCount;

    @Column(name = "User_Rating")
    private Integer userRating;

    @Column(name = "user_verification_code")
    private String userVerificationCode;

    @Column(name = "user_registration_date")
    private LocalDateTime userRegistrationDate;

    @Column(name = "user_update_date")
    private LocalDateTime userUpdateDate;

    @Column(name = "User_Address")
    private String userAddress;

    @Column(name = "User_Phone")
    private String userPhone;

    @Column(name = "User_Email_Verified")
    private Boolean userEmailVerified;

    @Column(name = "User_Photo")
    private String userPhoto;

    @Column(name = "User_Profile_Back")
    private String userProfileBack;


    @JoinColumn(name = "User_Role", table = "Users", nullable = false)
    @ManyToOne(fetch = FetchType.EAGER)
    private Roles userRole;


    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class , cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinTable(name = "II_users_products",

            joinColumns = {@JoinColumn(name = "user_id")},
            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Set<Products> products = new HashSet<Products>();


    @ManyToMany(fetch = FetchType.LAZY, targetEntity = Products.class)
    @JoinTable(name = "II_users_request_products",

            joinColumns = {@JoinColumn(name = "User_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Set<Products> requestProducts = new HashSet<Products>();


    @OneToMany(fetch = FetchType.LAZY, targetEntity = Products.class)
    @JoinTable(name = "II_users_basket",
            joinColumns = {@JoinColumn(name = "User_ID")},
            inverseJoinColumns = {@JoinColumn(name = "Product_ID")}
    )
    @JsonIgnore
    private Set<Products> basketProducts = new HashSet<Products>();
}
