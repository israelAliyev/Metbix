
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Navigation,Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Thumbs]);

function Slider() {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <>

            <Swiper style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}} spaceBetween={10}
                    navigation={true} thumbs={{swiper: thumbsSwiper}} className="mySwiper2">
                <SwiperSlide><img src="/images/pro14.jpeg"/></SwiperSlide>

                <SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-2.jpg"/></SwiperSlide><SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-3.jpg"/></SwiperSlide><SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-4.jpg"/></SwiperSlide><SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-5.jpg"/></SwiperSlide><SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-6.jpg"/></SwiperSlide>
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={0} slidesPerView={6} freeMode={true}
                    watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">
                <SwiperSlide><img src="/images/pro14.jpeg"/></SwiperSlide>
                <SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-2.jpg"/></SwiperSlide><SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-3.jpg"/></SwiperSlide><SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-4.jpg"/></SwiperSlide><SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-5.jpg"/></SwiperSlide><SwiperSlide><img
                src="https://swiperjs.com/demos/images/nature-6.jpg"/></SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;