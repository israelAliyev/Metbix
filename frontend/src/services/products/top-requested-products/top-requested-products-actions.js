import * as TRP from './top-requested-products-types';
import axios from "axios";

export const fetchTopRequestedProducts = () => {

    return async dispatch => {


        dispatch(fetchTopRequestedProductsRequest());

        await axios.get("http://localhost:8080/api/products/top-requested-products")
            .then((response) => {

                dispatch(fetchTopRequestedProductsSuccess(response.data));
            }).catch((error) => {

                dispatch(fetchTopRequestedProductsFailure(error.message));

            })
    }
}



const fetchTopRequestedProductsRequest = () => {

    return {

        type: TRP.TOP_REQUESTED_PRODUCTS_REQUEST
    }

}


const fetchTopRequestedProductsSuccess = (response) => {

    return {

        type: TRP.TOP_REQUESTED_PRODUCTS_SUCCESS,
        payload: response
    }

}


const fetchTopRequestedProductsFailure = (error) => {

    return {

        type: TRP.TOP_REQUESTED_PRODUCTS_FAILURE,
        payload: error
    }

}