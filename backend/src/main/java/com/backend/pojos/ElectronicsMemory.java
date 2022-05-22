package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "electronics_memory")
@Getter
@Setter
public class ElectronicsMemory implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Memory_ID")
    private Long memoryId;

    @Column(name = "Memory_GB")
    private String memoryGb;

    @Column(name = "Category_ID")
    private Long categoryId;


}
