
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

function Slider(props) {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    return (
        <>

            <Swiper style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}} spaceBetween={10}
                    navigation={true} thumbs={{swiper: thumbsSwiper}} className="mySwiper2">

                {props.productsPictures.map((picture) => (
                <SwiperSlide> <img src={picture.picturePath}/></SwiperSlide>
                ))}

            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} spaceBetween={0} slidesPerView={6} freeMode={true}
                    watchSlidesVisibility={true} watchSlidesProgress={true} className="mySwiper">

                {props.productsPictures.map((picture) => (
                    <SwiperSlide> <img src={picture.picturePath}/></SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default Slider;