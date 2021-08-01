package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "automotive_crash")
public class AutomotiveCrash {
    @Id
    @Column(name = "Crash_ID")
    private Long crashId;

    @Column(name = "Crash")
    private String crash;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getCrashId() {
        return this.crashId;
    }

    public void setCrashId(Long crashId) {
        this.crashId = crashId;
    }

    public String getCrash() {
        return this.crash;
    }

    public void setCrash(String crash) {
        this.crash = crash;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
