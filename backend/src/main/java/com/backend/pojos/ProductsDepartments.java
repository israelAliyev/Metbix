package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "products_departments")
public class ProductsDepartments {
    @Id
    @Column(name = "Department_ID")
    private Long departmentId;

    @Column(name = "Department")
    private String department;

    public Long getDepartmentId() {
        return this.departmentId;
    }

    public void setDepartmentId(Long departmentId) {
        this.departmentId = departmentId;
    }

    public String getDepartment() {
        return this.department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
