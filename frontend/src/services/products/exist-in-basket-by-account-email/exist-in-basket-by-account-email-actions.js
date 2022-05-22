import * as PIB from './exist-in-basket-by-account-email-types';
import axios from "axios";
import exist_product_in_basket_reducer from "./exist-in-basket-by-account-email-reducer";

export const existProductInBasket = (product_id , email) => {

    return async dispatch => {


        dispatch(existProductInBasketoRequest());

        await axios.get(`http://localhost:8080/api/products/exist-in-basket-by-account-email?product_id=${product_id}&email=${email}`)
            .then((response) => {

                dispatch(existProductInBasketSuccess(response.data));

            }).catch((error) => {

                dispatch(existProductInBasketFailure(error.message));
            })
    }
}


const existProductInBasketoRequest = () => {

    return {

        type: PIB.PRODUCT_IN_BASKET_REQUEST
    }

}


const existProductInBasketSuccess = (response) => {

    return {

        type: PIB.PRODUCT_IN_BASKET_SUCCESS,
        payload: response
    }

}


const existProductInBasketFailure = (error) => {

    return {

        type: PIB.PRODUCT_IN_BASKET_FAILURE,
        payload: error
    }

}