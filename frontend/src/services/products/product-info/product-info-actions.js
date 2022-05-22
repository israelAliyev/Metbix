import * as PI from './product-info-types';
import axios from "axios";

export const fetchProductInfo = (product_id) => {

    return async dispatch => {


        dispatch(productInfoRequest());

        await axios.get("http://localhost:8080/api/products/product-info/" + product_id)
            .then((response) => {

                dispatch(productInfoSuccess(response));

            }).catch((error) => {

                dispatch(productInfoFailure(error.message));
            })
    }
}


const productInfoRequest = () => {

    return {

        type: PI.PRODUCT_INFO_REQUEST
    }

}


const productInfoSuccess = (response) => {

    return {

        type: PI.PRODUCT_INFO_SUCCESS,
        payload: response
    }

}


const productInfoFailure = (error) => {

    return {

        type: PI.PRODUCT_INFO_FAILURE,
        payload: error
    }

}