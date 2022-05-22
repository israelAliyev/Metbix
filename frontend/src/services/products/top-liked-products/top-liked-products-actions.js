import * as TLP from './top-liked-products-types';
import axios from "axios";

export const fetchTopLikedProducts = () => {

    return async dispatch => {


        dispatch(fetchTopLikedProductsRequest());

        await axios.get("http://localhost:8080/api/products/top-liked-products")
            .then((response) => {

                dispatch(fetchTopLikedProductsSuccess(response.data))

            }).catch((error) => {

                dispatch(fetchTopLikedProductsFailure(error.message));

            })
    }
}


const fetchTopLikedProductsRequest = () => {

    return {

        type: TLP.TOP_LIKED_PRODUCTS_REQUEST
    }

}


const fetchTopLikedProductsSuccess = (response) => {

    return {

        type: TLP.TOP_LIKED_PRODUCTS_SUCCESS,
        payload: response
    }

}


const fetchTopLikedProductsFailure = (error) => {

    return {

        type: TLP.TOP_LIKED_PRODUCTS_FAILURE,
        payload: error
    }

}