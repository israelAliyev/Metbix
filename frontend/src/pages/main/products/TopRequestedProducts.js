import React, {Component, useEffect} from 'react';
import '../../../css/toprequestedproducts.css'
import ProductCard from "../../../components/product-item/ProductCard";
import {useSelector} from "react-redux";

const TopRequestedProducts = (props) => {

    const topRequestedProducts = useSelector(state => state.top_requested_products)

    return (
            <>

                <div className="top-requested-products mt-5">

                    <div className="row-title d-flex justify-content-between align-items-center w-100">
                        <h4>Top Requested Products</h4>
                        <div/>
                    </div>

                    <div className="products d-flex justify-content-between flex-wrap mt-3">

                        {
                            topRequestedProducts.response &&
                            topRequestedProducts.response.map((item) => (
                            <ProductCard product={item}/>
                        ))}

                    </div>

                </div>

            </>
        );

}

export default TopRequestedProducts;