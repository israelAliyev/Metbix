import React, {Component} from 'react';
import ProductOverview from "./ProductOverview";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper/core";

class Description extends Component {
    render() {

        const tablet = window.innerWidth <= 1025;
        const phone = window.innerWidth <= 576;

        // install Swiper modules
        SwiperCore.use([Keyboard, Pagination, Navigation]);

        return (
            <>
               <div className="description-pictures d-flex flex-wrap justify-content-between">

                   <div className="description">
                       <label>Description</label>

                       <textarea name="" id="" cols="30" rows="10">

                       </textarea>

                   </div>


                   <div className="pictures mt-4">
                       <label>Pictures</label>

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
                           <SwiperSlide>
                               <video autoPlay={true} controls={true} loop={true} src="/images/car.mp4" alt=""/>
                           </SwiperSlide>
                           <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                           <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                           <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                           <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                           <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>
                           <SwiperSlide><img src="/images/departments/Automotive.jpeg" alt=""/></SwiperSlide>

                       </Swiper>

                   </div>

                   <div className="certificates mt-4 overflow-auto">
                       <label>Certificates</label>

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


                   <ProductOverview/>


               </div>
            </>
        );
    }
}

export default Description;