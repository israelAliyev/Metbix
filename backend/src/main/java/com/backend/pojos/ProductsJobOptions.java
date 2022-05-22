package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "products_job_options")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
public class ProductsJobOptions implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "job_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long jobID;



//
//    @Column(name = "Category_ID")
//    private Long categoryId;

    @Column(name = "Job_Desc")
    private String jobDesc;

    @Column(name = "Job_Valid_Time")
    private LocalDateTime jobValidTime;

//    @Column(name = "Company")
//    private String company;

    @Column(name = "Job_Email")
    private String jobEmail;

    @Column(name = "Country")
    private String country;

    @Column(name = "City")
    private String city;

    @Column(name = "Salary")
    private Integer salary;

    @Column(name = "Experience")
    private String experience;


    @OneToOne(fetch = FetchType.LAZY, targetEntity = Products.class , cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinColumn(name = "Product_ID" )
    @JsonIgnore
    private Products product;
}
