package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "apparel_fabric_type")
@Getter
@Setter
public class ApparelFabricType implements Serializable {

    private static final long serialVersionUID = 214321321421L;


    @Id
    @Column(name = "Fabric_Type_ID")
    private Long fabricTypeId;

    @Column(name = "Fabric_Type")
    private String fabricType;

    @Column(name = "Sub_Category_ID")
    private Long subCategoryId;
}
