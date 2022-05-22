import * as RPB from './remove-product-basket-types';
import axios from "axios";

export const removeProductBasket = (email , product_id) => {

    return async dispatch => {

        dispatch(removeProductBasketRequest());

        await axios.post(`http://localhost:8080/api/products/remove-basket-product?email=${email}&product_id=${product_id}`)
            .then((response) => {
                dispatch(removeProductBasketSuccess(response.data));
            })
            .catch((error) => {

                dispatch(removeProductBasketFailure(error.message));
            })
    }
}


const removeProductBasketRequest = () => {

    return {

        type: RPB.REMOVE_PRODUCT_BASKET_REQUEST
    }

}


const removeProductBasketSuccess = (response) => {

    return {

        type: RPB.REMOVE_PRODUCT_BASKET_SUCCESS,
        payload: response
    }

}


const removeProductBasketFailure = (error) => {

    return {

        type: RPB.REMOVE_PRODUCT_BASKET_FAILURE,
        payload: error
    }

}