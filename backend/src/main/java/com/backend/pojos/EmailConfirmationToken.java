package com.backend.pojos;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "email_confirmation_token")
@Data
@NoArgsConstructor
public class EmailConfirmationToken {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "token")
    private String token;


    @Column(name = "created_date" , nullable = false)
    private LocalDateTime createdDate;

    @Column(name = "confirmed_date")
    private LocalDateTime confirmedDate;


    @ManyToOne(fetch = FetchType.LAZY , optional = false)
    @JoinTable(name = "II_email_confirmation_token_users",
            joinColumns = {@JoinColumn(name = "token_id")},
            inverseJoinColumns = {@JoinColumn(name = "user_id")}
    )
    private Users user;


    @ManyToOne(fetch = FetchType.LAZY , optional = false)
    @JoinTable(name = "II_email_confirmation_token_companies",
            joinColumns = {@JoinColumn(name = "token_id")},
            inverseJoinColumns = {@JoinColumn(name = "company_id")}
    )
    private Companies company;
}
