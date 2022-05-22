import * as GPB from './get-product-basket-types';
import axios from "axios";

export const getProductsBasketFromUser = (email) => {

    return async dispatch => {

        dispatch(getProductsBasketRequest());

        await axios.get(`http://localhost:8080/api/products/user-basket-products/`+email)

            .then((response) => {
                dispatch(getProductsBasketSuccess(response.data));
            })
            .catch((error) => {

                dispatch(getProductsBasketFailure(error.message));
            })
    }
}

export const getProductsBasketFromCompany = (email) => {

    return async dispatch => {

        dispatch(getProductsBasketRequest());

        await axios.get(`http://localhost:8080/api/products/company-basket-products/`+email)

            .then((response) => {
                dispatch(getProductsBasketSuccess(response.data));
            })
            .catch((error) => {

                dispatch(getProductsBasketFailure(error.message));
            })
    }
}


const getProductsBasketRequest = () => {

    return {

        type: GPB.GET_PRODUCT_BASKET_REQUEST
    }

}


const getProductsBasketSuccess = (response) => {

    return {

        type: GPB.GET_PRODUCT_BASKET_SUCCESS,
        payload: response
    }

}


const getProductsBasketFailure = (error) => {

    return {

        type: GPB.GET_PRODUCT_BASKET_FAILURE,
        payload: error
    }

}