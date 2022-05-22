import * as FP from "./filter-products-types";
import axios from "axios";

export const filterProducts = (properties) => {

    return async dispatch => {

        if (properties) {

            dispatch(filterProductsRequest());


            await axios.post("http://localhost:8080/api/products/filter-products" , properties)
                .then((response) => {

                    dispatch(filterProductsSuccess(response.data));

                }).catch((error) => {

                    dispatch(filterProductsFailure(error.message));

                })
        }

    }
}


const filterProductsRequest = () => {

    return {

        type: FP.FILTER_PRODUCTS_REQUEST
    }

}


const filterProductsSuccess = (response) => {

    return {

        type: FP.FILTER_PRODUCTS_SUCCESS,
        payload: response
    }

}


const filterProductsFailure = (error) => {

    return {

        type: FP.FILTER_PRODUCTS_FAILURE,
        payload: error
    }

}