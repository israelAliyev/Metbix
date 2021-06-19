import React, {Component} from 'react';
import Slider from "./Slider/Slider";
import Department from "./Department/Department";
import Brands from "./Products/Brands";
import TopRequestedProducts from "./Products/TopRequestedProducts";
import TopLikedProducts from "./Products/TopLikedProducts";

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