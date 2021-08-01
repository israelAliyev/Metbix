package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_screen_size")
public class ElectronicsScreenSize {
    @Id
    @Column(name = "Screen_Size_ID")
    private Long screenSizeId;

    @Column(name = "Screen_Size")
    private String screenSize;

    @Column(name = "Category_ID")
    private Long categoryId;

    @Column(name = "Screen_Size_Range_ID")
    private Long screenSizeRangeId;

    public Long getScreenSizeId() {
        return this.screenSizeId;
    }

    public void setScreenSizeId(Long screenSizeId) {
        this.screenSizeId = screenSizeId;
    }

    public String getScreenSize() {
        return this.screenSize;
    }

    public void setScreenSize(String screenSize) {
        this.screenSize = screenSize;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getScreenSizeRangeId() {
        return this.screenSizeRangeId;
    }

    public void setScreenSizeRangeId(Long screenSizeRangeId) {
        this.screenSizeRangeId = screenSizeRangeId;
    }
}
