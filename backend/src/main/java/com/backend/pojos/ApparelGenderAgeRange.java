package com.backend.pojos;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

@Entity
@Table(name = "apparel_gender_age_range")
@Cacheable
@org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
@Getter
@Setter
public class ApparelGenderAgeRange {
    @Id
    @Column(name = "Age_Range_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ageRangeId;

    @Column(name = "Age_Range")
    private String ageRange;

    @Column(name = "Gender_ID")
    private Long genderId;

    public Long getAgeRangeId() {
        return this.ageRangeId;
    }

    public void setAgeRangeId(Long ageRangeId) {
        this.ageRangeId = ageRangeId;
    }

    public String getAgeRange() {
        return this.ageRange;
    }

    public void setAgeRange(String ageRange) {
        this.ageRange = ageRange;
    }

    public Long getGenderId() {
        return this.genderId;
    }

    public void setGenderId(Long genderId) {
        this.genderId = genderId;
    }
}
