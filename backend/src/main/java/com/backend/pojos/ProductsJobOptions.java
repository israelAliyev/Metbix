package com.backend.pojos;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "products_job_options")
@Data
public class ProductsJobOptions {

    @Id
    @Column(name = "Product_ID")
    private Long productId;

    @Column(name = "Category_ID")
    private Long categoryId;

    @Column(name = "Job_Title")
    private String jobTitle;

    @Column(name = "Job_Valid_Time")
    private java.sql.Timestamp jobValidTime;

    @Column(name = "Company")
    private String company;

    @Column(name = "Jom_Email")
    private String jomEmail;

    @Column(name = "Country")
    private String country;

    @Column(name = "City")
    private String city;

    @Column(name = "Salary")
    private Integer salary;

    @Column(name = "Experience")
    private String experience;


}
