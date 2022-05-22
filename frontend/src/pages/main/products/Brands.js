import React, {Component} from 'react';
import '../../../css/brands.css'
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {Pagination, Navigation} from "swiper/core";

class Brands extends Component {
    render() {
        SwiperCore.use([Pagination, Navigation]);
        const tablet = window.innerWidth <= 992;
        const phone = window.innerWidth <= 576;

        return (
            <>
                <section className="main-brands bg-white mt-5">


                    <div className="responsive-brands d-none">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={-30}
                            slidesPerGroup={1}
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

                            <SwiperSlide onClick={()=>{window.location.href = "/products?search=apple"}}>
                                <div className="item">
                                    <img src="/images/brands/Apple/pexels-photo-129208.jpeg" alt=""/>

                                    <div className="content">
                                        <span>iMac and Macbooks</span>
                                        <h3 className="mb-4 mt-1">Apple's Computers</h3>
                                        <span >Thin and powerful laptops</span>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide onClick={()=>{window.location.href = "/products?search=tesla"}}>
                                <div className="item">
                                    <img src="/images/brands/Tesla/photo-1536617621572-1d5f1e6269a0.jpeg" alt=""/>

                                    <div className="content">
                                        <span className="text-white" >Sedan Crossover Truck</span>
                                        <h3 className="mb-4 mt-1">Tesla Automobile</h3>
                                        <span>Electric and safe vehicles</span>

                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide onClick={()=>{window.location.href = "/products?search=armchair"}}>
                                <div className="item">
                                    <img src="/images/brands/RestorationHardware/photo-1616627547584-bf28cee262db.jpeg" alt=""/>

                                    <div className="content">
                                        <span className="tex">Armchair, Sofa, Bed</span>
                                        <h3 className="mb-4 mt-1">Restoration Hardware</h3>
                                        <span>Solid and Comfortable products</span>


                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide onClick={()=>{window.location.href = "/products?search=mixer"}}>
                                <div className="item">
                                    <img src="/images/brands/Arcelik/photo-1590164409291-450e859ccb87.jpeg" alt=""/>

                                    <div className="content">
                                        <span className="text-white">Mixer, Blender, Cleaner</span>
                                        <h3 className="mb-4 mt-1">Arçelik's Products</h3>
                                        <span>Best household appliances</span>


                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide onClick={()=>{window.location.href = "/products?search=nike"}}>
                                <div className="item">
                                    <img src="/images/brands/Nike/photo-1596568408389-429af9cb3fc9.jpeg" alt=""/>

                                    <div className="content">
                                        <span className="text-white">Chuck Taylor, Running, High tops</span>
                                        <h3 className="mb-4 mt-1">Nike's Sport Shoes</h3>
                                        <span>Solid and Comfortable shoes</span>

                                    </div>
                                </div>

                            </SwiperSlide>

                        </Swiper>

                    </div>


                    <div className="brands d-flex justify-content-between flex-wrap">

                        <div className="item" onClick={()=>{window.location.href = "/products?search=apple"}}>
                            <img src="/images/brands/Apple/pexels-photo-129208.jpeg" alt=""/>

                            <div className="content">
                                <span>iMac and Macbooks</span>
                                <h3 className="mb-4 mt-1">Apple's Computers</h3>
                                <span >Thin and powerful laptops</span>

                                <i className="fab fa-apple d-none"/>
                                <p className="d-none">Apple</p>
                            </div>
                        </div>

                        <div className="item" onClick={()=>{window.location.href = "/products?search=tesla"}}>
                            <img src="/images/brands/Tesla/photo-1536617621572-1d5f1e6269a0.jpeg" alt=""/>

                            <div className="content">
                                <span className="text-white" >Sedan Crossover Truck</span>
                                <h3 className="mb-4 mt-1">Tesla Automobile</h3>
                                <span>Electric and safe vehicles</span>

                                <img className="d-none" src="/images/icons8-tesla.svg"/>
                                <p className="d-none">Tesla</p>
                            </div>
                        </div>

                        <div className="item" onClick={()=>{window.location.href = "/products?search=armchair"}}>
                            <img src="/images/brands/RestorationHardware/photo-1616627547584-bf28cee262db.jpeg" alt=""/>

                            <div className="content">
                                <span className="tex">Armchair, Sofa, Bed</span>
                                <h3 className="mb-4 mt-1">Restoration Hardware</h3>
                                <span>Solid and Comfortable products</span>



                                <img className="d-none" src="/images/restoration-hardware.png"/>
                                <p className="d-none">Restoration Hardware</p>
                            </div>
                        </div>

                        <div className="item" onClick={()=>{window.location.href = "/products?search=mixer"}}>
                            <img src="/images/brands/Arcelik/photo-1590164409291-450e859ccb87.jpeg" alt=""/>

                            <div className="content">
                                <span className="text-white">Mixer, Blender, Cleaner</span>
                                <h3 className="mb-4 mt-1">Arçelik's Products</h3>
                                <span>Best household appliances</span>

                                <img className="d-none" src="/images/arcelik.png"/>
                                <p className="d-none">Arçelik</p>
                            </div>
                        </div>

                        <div className="item" onClick={()=>{window.location.href = "/products?search=nike"}}>
                            <img src="/images/brands/Nike/photo-1596568408389-429af9cb3fc9.jpeg" alt=""/>

                            <div className="content">
                                <span className="text-white">Chuck Taylor, Running, High tops</span>
                                <h3 className="mb-4 mt-1">Nike's Sport Shoes</h3>
                                <span>Solid and Comfortable shoes</span>

                                <img  className="d-none p-0" src="/images/nike.png"/>
                                <p className="d-none">Nike</p>
                            </div>
                        </div>


                    </div>


                </section>

            </>
        );
    }
}

export default Brands;