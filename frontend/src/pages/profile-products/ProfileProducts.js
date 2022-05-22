import React, {useEffect, useState} from 'react';
import '../../css/basket.css'
import ProductCard from "../../components/product-item/ProductCard";
import useQuery from "../../services/url-query-parameter/url-query-parameter";
import {
    convertCurrency, getCompanyProductsInStock,
    getProductsBasketFromCompany,
    getProductsBasketFromUser, getUserProductsInStock,
    removeProductBasket, removeProductFromStock
} from "../../services";
import {useDispatch, useSelector} from "react-redux";

function ProfileProducts(props) {

    const query = useQuery();
    const account = JSON.parse(localStorage.getItem("__|^|__"));
    const dispatch = useDispatch();

    const change = query.get("change");
    const email = query.get("email");
    const type = query.get("type");

    if ((!email || !type) && (!change || !type)) window.location.href = "/"
    if (change && !account.iiasrl) window.location.href = "/"


    const stock_products = useSelector(state => state.get_profile_products_in_stock);

    const [products_items, set_products_items] = useState(null);


    useEffect(() => {

        dispatch(convertCurrency());

        if (type === "company" && email) {
            dispatch(getCompanyProductsInStock(email))
        } else if (type === "user" && email) {
            dispatch(getUserProductsInStock(email))
        }

        if (account && account.iiasrl && change) {

            if (type === "company") {
                dispatch(getCompanyProductsInStock(account.iiasrl))
            } else if (type === "user") {
                dispatch(getUserProductsInStock(account.iiasrl))
            }
        }

    }, [])

    useEffect(() => {
        stock_products.response &&
        set_products_items(stock_products.response)
    }, [stock_products])

    const removeProductFromStock = (product_id) => {

        const filtered_products = products_items.filter(product => product.productId === product_id);

        set_products_items(filtered_products);

        if (account) {
            dispatch(removeProductFromStock(product_id))
        }
    }

    return (
        <>

            <div className="profile-products-in-stock">

                <div className="header w-100 mb-5 d-flex align-items-center">

                    <span/>

                    <h3>Profile Products In Stock</h3>

                    <span/>

                </div>


                <div className="products d-flex flex-wrap">


                    {products_items?.map((product => (

                        <ProductCard remove={change && removeProductFromStock} product={product}/>
                    )))}


                    {!products_items &&

                    <div className="loading w-100 d-flex justify-content-center">
                        <iframe height="450" width="600" src="https://embed.lottiefiles.com/animation/73480"/>
                    </div>
                    }

                    {(products_items && products_items.length === 0) &&
                        <div className="not-found-item">
                            <span>Products Not Found !</span>
                        </div>
                    }
                </div>


            </div>

        </>
    );
}

export default ProfileProducts;