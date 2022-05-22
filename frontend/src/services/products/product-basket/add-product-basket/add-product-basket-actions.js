import * as APB from './add-product-basket-types';
import axios from "axios";

export const addProductBasket = (email , product_id) => {

    return async dispatch => {

        dispatch(addProductBasketRequest());

        await axios.post(`http://localhost:8080/api/products/add-basket-product?email=${email}&product_id=${product_id}`)
            .then((response) => {
                dispatch(addProductBasketSuccess(response.data));
            })
            .catch((error) => {

                dispatch(addProductBasketFailure(error.message));
            })
    }
}


const addProductBasketRequest = () => {

    return {

        type: APB.ADD_PRODUCT_BASKET_REQUEST
    }

}


const addProductBasketSuccess = (response) => {

    return {

        type: APB.ADD_PRODUCT_BASKET_SUCCESS,
        payload: response
    }

}


const addProductBasketFailure = (error) => {

    return {

        type: APB.ADD_PRODUCT_BASKET_FAILURE,
        payload: error
    }

}