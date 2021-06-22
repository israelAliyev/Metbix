import React, {Component} from 'react';
import '../../../css/department.css';
import Slider from "react-slick";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {Pagination, Navigation} from "swiper/core";

class Department extends Component {

    render() {

        SwiperCore.use([Pagination, Navigation]);

        const tablet = window.innerWidth <= 992;
        const phone = window.innerWidth <= 576;

        return (
            <>
                <div className="main-departments-categories">

                    <Swiper
                        slidesPerView={phone ? 1: tablet ? 2 : 5}
                        spaceBetween={0}
                        slidesPerGroup={phone ? 1: tablet ? 2 : 5}
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

                        <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide> <SwiperSlide>
                            <div className="item">
                                <img src="/images/departments/Electronics.png"/><span>Hard driver & Storage</span>
                            </div>
                        </SwiperSlide>

                    </Swiper>


                    <div className="categories d-flex mt-4 flex-wrap">

                        <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>CHair Care</span>
                        </div>
                        <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>Control Tools</span>
                        </div>
                        <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>Control Tools</span>
                        </div>
                        <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>Control Tools</span>
                        </div>
                        <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>Control Tools</span>
                        </div>
                        <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>Control Tools</span>
                        </div>
                        <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>CHair Care</span>
                        </div>
                        <div className="item d-flex flex-column align-items-center ">
                        <i className="bi bi-archive"/>
                        <span>CHair Care</span>
                    </div>
                        <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>CHair Care</span>
                        </div>  <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>CHair Care</span>
                        </div> <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>CHair Care</span>
                        </div> <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>CHair Care</span>
                        </div> <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>CHair Care</span>
                        </div> <div className="item d-flex flex-column align-items-center ">
                            <i className="bi bi-archive"/>
                            <span>CHair Care</span>
                        </div>

                    </div>



                </div>
            </>
        );
    }
}

export default Department;