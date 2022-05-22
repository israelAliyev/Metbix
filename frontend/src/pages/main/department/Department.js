import React, {Component} from 'react';
import '../../../css/department.css';
import Slider from "react-slick";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {Pagination, Navigation} from "swiper/core";
import department_data from "../../../products-json/departments.json"
import category_data from "../../../products-json/categories.json"


class Department extends Component {

    constructor(props) {
        super(props);
        this.state = {
            department_id: 0
        };
    }


    render() {

        SwiperCore.use([Pagination, Navigation]);

        const tablet = window.innerWidth <= 992;
        const phone = window.innerWidth <= 576;

        return (
            <>
                <div className="main-departments-categories">

                    <Swiper
                        spaceBetween={0}
                        slidesPerView={phone ? 1 : tablet ? 2 : 5}
                        slidesPerGroup={phone ? 1 : tablet ? 2 : 5}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true
                        }}
                        className="mySwiper"
                        keyboard={{
                            enabled: true
                        }}
                    >


                        {department_data.map((item) => (

                            <SwiperSlide onClick={()=>{
                               this.setState({department_id:item.departmentId});
                            }}>
                                <div className="item">
                                    <img src={item.photo}/><span>{item.department}</span>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>


                    <div className="categories d-flex mt-4 flex-wrap">

                        {category_data.filter(item => item.department.departmentId === this.state.department_id).map((category) => (
                        <div onClick={() => {window.location.href="/products?category-id="+category.categoryId}} className="item d-flex flex-column align-items-center justify-content-center">
                            <span>{category.categoryName}</span>
                        </div>
                        ))}
                    </div>


                </div>
            </>
        );
    }
}

export default Department;