package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_ram")
public class ElectronicsRam {
    @Id
    @Column(name = "Ram_ID")
    private Long ramId;

    @Column(name = "Ram_GB")
    private String ramGb;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getRamId() {
        return this.ramId;
    }

    public void setRamId(Long ramId) {
        this.ramId = ramId;
    }

    public String getRamGb() {
        return this.ramGb;
    }

    public void setRamGb(String ramGb) {
        this.ramGb = ramGb;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
