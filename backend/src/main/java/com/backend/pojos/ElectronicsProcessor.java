package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_processor")
public class ElectronicsProcessor {
    @Id
    @Column(name = "Processor_ID")
    private Long processorId;

    @Column(name = "Processor")
    private String processor;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getProcessorId() {
        return this.processorId;
    }

    public void setProcessorId(Long processorId) {
        this.processorId = processorId;
    }

    public String getProcessor() {
        return this.processor;
    }

    public void setProcessor(String processor) {
        this.processor = processor;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
