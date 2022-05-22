import React, {Component , useEffect} from 'react';
import Slider from "./slider/Slider";
import Department from "./department/Department";
import Brands from "./products/Brands";
import TopRequestedProducts from "./products/TopRequestedProducts";
import TopLikedProducts from "./products/TopLikedProducts";
import {fetchTopLikedProducts , fetchTopRequestedProducts , convertCurrency} from "../../services";
import {useDispatch} from "react-redux";

const Main = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchTopRequestedProducts());
        dispatch(fetchTopLikedProducts());
        dispatch(convertCurrency());

    }, [])

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

export default Main;