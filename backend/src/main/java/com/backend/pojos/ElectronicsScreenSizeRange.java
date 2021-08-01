package com.backend.pojos;

import javax.persistence.*;

@Entity
@Table(name = "electronics_screen_size_range")
public class ElectronicsScreenSizeRange {
    @Id
    @Column(name = "Screen_Size_Range_ID")
    private Long screenSizeRangeId;

    @Column(name = "Screen_Size_Range")
    private String screenSizeRange;

    @Column(name = "Category_ID")
    private Long categoryId;

    public Long getScreenSizeRangeId() {
        return this.screenSizeRangeId;
    }

    public void setScreenSizeRangeId(Long screenSizeRangeId) {
        this.screenSizeRangeId = screenSizeRangeId;
    }

    public String getScreenSizeRange() {
        return this.screenSizeRange;
    }

    public void setScreenSizeRange(String screenSizeRange) {
        this.screenSizeRange = screenSizeRange;
    }

    public Long getCategoryId() {
        return this.categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
}
