package com.backend.pojos;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "electronics_screen_size_range")
@Getter
@Setter
public class ElectronicsScreenSizeRange implements Serializable {

    private static final long serialVersionUID = 214321321421L;

    @Id
    @Column(name = "Screen_Size_Range_ID")
    private Long screenSizeRangeId;

    @Column(name = "Screen_Size_Range")
    private String screenSizeRange;

    @Column(name = "Category_ID")
    private Long categoryId;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = ElectronicsScreenSize.class, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH , CascadeType.REMOVE})
    @JoinColumn(name = "Screen_Size_Range_ID")
    @JsonIgnore
    private List<ElectronicsScreenSize> electronicsScreenSize;

}
