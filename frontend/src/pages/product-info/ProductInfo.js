import React, {Component, useEffect, useState} from 'react';
import '../../css/productinfo.css'
import '../../css/sliderproductinfo.css';
import '../../css/responsiveproductinfo.css';
import Message from "./components/message/Message";
import About from "./components/about/About"
import Product from "./components/product/Product";
import {useSelector, useDispatch} from "react-redux";
import {fetchProductInfo} from "../../services";
import useQuery from "../../services/url-query-parameter/url-query-parameter";
import Reviews from "./components/review/Review";
import Properties from "./components/properties/Properties";

const ProductInfo = () => {

    useEffect(() => {


    }, [])


    const dispatch = useDispatch();
    const productInfo = useSelector(state => state.product_info)
    let query = useQuery();
    let productIdPath = query.get("product-id");


    const [error, setError] = useState(true);
    const [loading, setLoading] = useState(undefined);

    useEffect(() => {

        if (!productIdPath) {
            window.location.href = "/"
        } else {

            dispatch(fetchProductInfo(productIdPath));
            setLoading(true)
        }

    }, [])

    useEffect(() => {

        if (!productInfo.response || !productInfo.response.data || productInfo.response.error) {
            setError(true)
        } else {
            setError(false)
            console.log(productInfo.response.data);
        }

    }, [productInfo])

    return (
        <>
            {!error ?

                <section className="product-info mt-3 container mb-5">


                    <Product product={productInfo.response.data}/>


                    <div className="sub">

                        <Properties properties={productInfo.response.data}/>
                        <About info={productInfo.response.data}/>
                        <Reviews review={productInfo.response.data}/>
                        <Message/>

                    </div>
                </section>
                : error && loading ?
                    <section
                        className="product-info mt-3 container mb-5 d-flex align-items-center justify-content-center">
                        <iframe width={500} height={500} src="https://embed.lottiefiles.com/animation/72356"/>
                    </section>
                    : null
            }
        </>
    );
}

export default ProductInfo;