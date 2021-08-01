package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_job_options")
public class ProductsJobOptions {
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

    public Long getProductId() {
        return this.productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getJobTitle() {
        return this.jobTitle;
    }

    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    public java.sql.Timestamp getJobValidTime() {
        return this.jobValidTime;
    }

    public void setJobValidTime(java.sql.Timestamp jobValidTime) {
        this.jobValidTime = jobValidTime;
    }

    public String getCompany() {
        return this.company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getJomEmail() {
        return this.jomEmail;
    }

    public void setJomEmail(String jomEmail) {
        this.jomEmail = jomEmail;
    }

    public String getCountry() {
        return this.country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getSalary() {
        return this.salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public String getExperience() {
        return this.experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }
}
