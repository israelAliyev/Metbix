import * as SP from './sell-product-types';
import axios from "axios";

export const sellProduct = (product) => {

    return async dispatch => {


        dispatch(sellProductRequest());

        await axios.post("http://localhost:8080/api/products/addProduct", product)
            .catch((error) => {

                dispatch(sellProductFailure(error.message));
            })
    }
}


const sellProductRequest = () => {

    return {

        type: SP.SELL_PRODUCT_REQUEST
    }

}


const sellProductSuccess = (response) => {

    return {

        type: SP.SELL_PRODUCT_SUCCESS,
        payload: response
    }

}


const sellProductFailure = (error) => {

    return {

        type: SP.SELL_PRODUCT_FAILURE,
        payload: error
    }

}