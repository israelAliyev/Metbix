import React, {useEffect, useState} from 'react';
import '../../css/basket.css'
import ProductCard from "../../components/product-item/ProductCard";
import useQuery from "../../services/url-query-parameter/url-query-parameter";
import {
    convertCurrency,
    getProductsBasketFromCompany,
    getProductsBasketFromUser,
    removeProductBasket
} from "../../services";
import {useDispatch, useSelector} from "react-redux";

function Basket(props) {

    const query = useQuery();
    const account = JSON.parse(localStorage.getItem("__|^|__"));
    const dispatch = useDispatch();

    const change = query.get("change");
    const email = query.get("email");
    const type = query.get("type");

    if ((!email || !type) && (!change || !type)) window.location.href = "/"
    if (change && !account.iiasrl) window.location.href = "/"


    const basket_products = useSelector(state => state.get_products_basket);

    const [products_items, set_products_items] = useState(null);


    useEffect(() => {

        dispatch(convertCurrency());

        if (type === "company" && email) {
            dispatch(getProductsBasketFromCompany(email))
        } else if (type === "user" && email) {
            dispatch(getProductsBasketFromUser(email))
        }

        if (account && account.iiasrl && change) {

            if (type === "company") {
                dispatch(getProductsBasketFromCompany(account.iiasrl))
            } else if (type === "user") {
                dispatch(getProductsBasketFromUser(account.iiasrl))
            }
        }

    }, [])

    useEffect(() => {
        basket_products.response &&
        set_products_items(basket_products.response)
    }, [basket_products])

    const removeBasketProduct = (product_id) => {

        const filtered_products = products_items.filter(product => product.productId === product_id);

        set_products_items(filtered_products);

        if (account) {
            dispatch(removeProductBasket(account.iiasrl, product_id))
        }
    }

    return (
        <>

            <div className="profile-basket-products">

                <div className="header w-100 mb-5 d-flex align-items-center">

                    <span/>

                    <h3>Basket</h3>

                    <span/>

                </div>


                <div className="products d-flex flex-wrap">


                    {products_items?.map((product => (

                        <ProductCard remove={change && removeBasketProduct} product={product}/>
                    )))}


                    {!products_items &&

                    <div className="loading w-100 d-flex justify-content-center">
                        <iframe height="450" width="600" src="https://embed.lottiefiles.com/animation/73480"/>
                    </div>
                    }

                    {products_items && products_items.length !== 0 ?
                        <div className="not-found-item">
                            <span>Products Not Found !</span>
                        </div>
                        : null
                    }
                </div>


            </div>

        </>
    );
}

export default Basket;