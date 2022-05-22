import React, {Component, useEffect} from 'react';
import '../../../css/toplikedproducts.css';
import ProductCard from "../../../components/product-item/ProductCard";
import {useSelector} from "react-redux";


const TopLikedProducts = (props) => {

    const topLikedProducts = useSelector(state => state.top_liked_products)


    return (
        <>
            <div className="top-liked-products mt-5 mb-4">

                <div className="row-title d-flex justify-content-between align-items-center">
                    <h4>Most liked products</h4>
                    <div/>
                </div>

                <div className="products d-flex justify-content-between flex-wrap mt-3">

                    {topLikedProducts.response &&
                    topLikedProducts.response.map((item) => (
                        <ProductCard product={item}/>
                    ))}
                </div>

            </div>

        </>
    );

}

export default TopLikedProducts;