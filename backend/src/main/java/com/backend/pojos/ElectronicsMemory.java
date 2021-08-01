package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_memory")
public class ElectronicsMemory {
    @Id
    @Column(name = "Memory_ID")
    private Long memoryId;

    @Column(name = "Memory_GB")
    private String memoryGb;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getMemoryId() {
        return this.memoryId;
    }

    public void setMemoryId(Long memoryId) {
        this.memoryId = memoryId;
    }

    public String getMemoryGb() {
        return this.memoryGb;
    }

    public void setMemoryGb(String memoryGb) {
        this.memoryGb = memoryGb;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
