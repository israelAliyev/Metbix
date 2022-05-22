package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "apparel_size")
@Getter
@Setter
public class ApparelSize implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Size_ID")
    private Long sizeId;

    @Column(name = "Size")
    private String size;

    @Column(name = "Sub_Category_ID")
    private Long subCategoryId;

}
