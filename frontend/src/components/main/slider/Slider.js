import React , {useState, useEffect}from 'react';
import '../../../css/slidermainpage.css'
import ShippingInfo from "./ShippingInfo";
import SliderData from './SliderData';
import {connect} from "react-redux";
import {show_sidebar} from "../../../services/index";

function Slider(props){

    const[currentSlide , setCurrentSlide] = useState(0);
    const length = SliderData.length;

    useEffect(() => {
        const timer = setTimeout(() => {
            NextSlide();
        }, 15000);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    if (!Array.isArray(SliderData) || SliderData.length <=0){
        return null;
    }

    const NextSlide = () =>{
        setCurrentSlide(currentSlide === length-1 ? 0 : currentSlide+1)
    }


    const PrevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? length-1: currentSlide-1)
    }


        return (
            <div>
                <section className="slider d-flex">

                    { SliderData.map((slide, index) =>(


                    <section className={ index === currentSlide ?"slide-item slide-active" : "slide-item"}>

                        <video src={slide.video} autoPlay={true} muted={true} loop={true}/>
                        {!props.show_sidebar_bool.show_sidebar &&
                        <div className="content">
                            <h2>{slide.content_1}<span>{slide.content_2}</span></h2>
                            <h2>{slide.content_3}</h2>
                            <h5>{slide.content_4}</h5>

                             <a className="shop-button cursor-pointer">Shop Now</a>

                        </div>
                        }
                    </section>

                    ))

                    }

                    <div className="control-icons d-flex justify-content-between w-100">
                        <i onClick={PrevSlide} className="bi bi-chevron-left cursor-pointer"/>
                        <i onClick={NextSlide} className="bi bi-chevron-right cursor-pointer"/>
                    </div>
                    {!props.show_sidebar_bool.show_sidebar &&
                    <div className="shipping rounded-3">
                        <ShippingInfo/>
                    </div>}

                </section>

            </div>
        );
}

const map_state_props = state => {
    return {
        show_sidebar_bool: state.show_sidebar
    }
};

const map_dispatch_to_props = dispatch => {
    return {
        show_sidebar: (bool) => dispatch(show_sidebar(bool))
    }
};

export default connect(map_state_props, map_dispatch_to_props)(Slider);