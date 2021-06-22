import React, {Component} from 'react';
import Slider from "./slider/Slider";
import Department from "./department/Department";
import Brands from "./products/Brands";
import TopRequestedProducts from "./products/TopRequestedProducts";
import TopLikedProducts from "./products/TopLikedProducts";

class Main extends Component {
    render() {
        return (
            <>
                <Slider/>

                <Department/>

                <Brands/>

                <TopRequestedProducts/>

                <TopLikedProducts/>

            </>
        );
    }
}

export default Main;