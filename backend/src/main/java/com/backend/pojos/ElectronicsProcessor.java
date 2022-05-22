package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_processor")
@Getter
@Setter
public class ElectronicsProcessor implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Processor_ID")
    private Long processorId;

    @Column(name = "Processor")
    private String processor;

    @Column(name = "Category_ID")
    private Long categoryId;


}
