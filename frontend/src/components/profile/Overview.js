import React, {Component} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper/core";

class Overview extends Component {
    render() {

        const tablet = window.innerWidth <= 1025;
        const phone = window.innerWidth <= 576;

// install Swiper modules
        SwiperCore.use([Keyboard, Pagination, Navigation]);

        return (
            <>
                <div className="overview mt-5">

                    <h3 className="title">Company Overview</h3>

                    <div className="album">
                 <p>Company Album <span><i className="bi bi-image"/> 14</span> <span><i className="bi bi-play-circle"/> 1</span></p>


                        <Swiper
                            keyboard={{
                                enabled: true
                            }}
                            spaceBetween={15}
                            slidesPerView={phone ? 1: tablet ? 2 : 3}
                            slidesPerGroup={phone ? 1: tablet ? 2 : 3}
                            freeMode={true}
                            navigation={true}
                            loopFillGroupWithBlank={true}
                            className="mySwiper"
                        >
                            <SwiperSlide><video autoPlay={true} controls={true} loop={true} src="/images/car.mp4" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                            <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>

                        </Swiper>

                    </div>


                    <div className="info d-flex flex-wrap ">

                        <p>Company Information</p>


                        <table>

                            <tbody>

                            <tr>
                                <td>Country</td>
                                <td>Azerbaijan</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>Baku</td>
                            </tr>
                            <tr>
                                <td>Adres</td>
                                <td>Tasmali</td>
                            </tr>
                            <tr>
                                <td>Continents branches</td>
                                <td>Asia,Europe,America</td>
                            </tr>

                            </tbody>
                        </table>
                        <table>

                            <tbody>

                            <tr>
                                <td>Total annual revenue</td>
                                <td>$2900</td>
                            </tr>
                            <tr>
                                <td>Year established</td>
                                <td>2021</td>
                            </tr>
                            <tr>
                                <td>Production capacity</td>
                                <td>5000</td>
                            </tr>
                            <tr>
                                <td>Employees</td>
                                <td>10,001+</td>
                            </tr>

                            </tbody>
                        </table>

                    </div>

                    <div className="certification">
                        <p>Certification</p>


                        <table>
                            <thead>

                            <tr>
                                <th>Picture</th>
                                <th>Certification Name</th>
                                <th>Issued By</th>
                                <th>Business Scope</th>
                                <th>Available Date</th>
                            </tr>

                            </thead>

                            <tbody>

                            <tr>
                                <td><img src="/images/departments/Jobs.jpeg" alt=""/></td>
                                <td>WRAP</td>
                                <td>SGS</td>
                                <td>Electronics</td>
                                <td>2019-06-07</td>
                            </tr>
                            </tbody>
                        </table>

                    </div>


                </div>

            </>
        );
    }
}

export default Overview;