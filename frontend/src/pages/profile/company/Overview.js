import React, {Component} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, {Keyboard, Pagination, Navigation} from "swiper/core";

const Overview = (props) => {

    const tablet = window.innerWidth <= 1025;
    const phone = window.innerWidth <= 576;

// install Swiper modules
    SwiperCore.use([Keyboard, Pagination, Navigation]);

    return (
        <>
            <div className="overview mt-5">

                <h3 className="title">Company Overview</h3>

                <div className="album">
                    <p>Company Album <span><i className="bi bi-image"/> {props.media?.length}</span> <span><i className="bi bi-play-circle"/> 1</span></p>


                    <Swiper
                        keyboard={{
                            enabled: true
                        }}
                        spaceBetween={15}
                        slidesPerView={phone ? 1 : tablet ? 2 : 3}
                        slidesPerGroup={phone ? 1 : tablet ? 2 : 3}
                        freeMode={true}
                        navigation={true}
                        loopFillGroupWithBlank={true}
                        className="mySwiper"
                    >

                        {props.media?.map((media) => (

                            <SwiperSlide><img src={media.companyDetailImageMedia} alt=""/></SwiperSlide>
                        ))}

                    </Swiper>

                </div>


                <div className="info d-flex flex-wrap ">

                    <p>Company Information</p>


                    <table>

                        <tbody>

                        <tr>
                            <td>Country</td>
                            <td>{props.company?.companyCountry}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{props.company?.companyCity}</td>
                        </tr>
                        <tr>
                            <td>Adres</td>
                            <td>{props.company?.companyAddress}</td>
                        </tr>
                        <tr>
                            <td>Continents branches</td>
                            <td>{props.continents?.map((cont) => (cont.continentName+", "))}</td>
                        </tr>

                        </tbody>
                    </table>
                    <table>

                        <tbody>

                        <tr>
                            <td>Total annual revenue</td>
                            <td>{props.company?.companyTotalAnnualRevenue}</td>
                        </tr>
                        <tr>
                            <td>Year established</td>
                            <td>{props.company?.companyYearEstablished}</td>
                        </tr>
                        <tr>
                            <td>Production capacity</td>
                            <td>{props.company?.companyProductionCapacity}</td>
                        </tr>
                        <tr>
                            <td>Employees</td>
                            <td>{props.company?.companyEmployees}</td>
                        </tr>

                        </tbody>
                    </table>

                </div>

                {props.certificate &&

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
                            <td><img src={props.certificate[0].certificatePicture} alt=""/></td>
                            <td>{props.certificate[0].certificateName}</td>
                            <td>{props.certificate[0].certificateIssuedBy}</td>
                            <td>{props.certificate[0].certificateBusinessScope}</td>
                            <td>{new Date(props.certificate[0].certificateAvailableDate).toDateString()}</td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                }

            </div>

        </>
    );
}

export default Overview;