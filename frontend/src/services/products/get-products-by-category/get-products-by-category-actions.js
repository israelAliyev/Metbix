import * as GP from "./get-products-by-category-types";
import axios from "axios";

export const getProductsByCategory = (id , where) => {

    return async dispatch => {

        if (id) {

            dispatch(getProductsRequest());

            await axios.get("http://localhost:8080/api/products/find-by-" + where +"/" + id)
                .then((response) => {

                    dispatch(getProductsSuccess(response.data));

                }).catch((error) => {

                    dispatch(getProductsFailure(error.message));

                })
        }

    }
}


export const getProductsBySearchKeyword = (keyword) => {

    return async dispatch => {

        if (keyword) {

            dispatch(getProductsRequest());

            await axios.get("http://localhost:8080/api/products/search?keyword=" + keyword)

                .then((response) => {

                    dispatch(getProductsSuccess(response.data));

                }).catch((error) => {

                    dispatch(getProductsFailure(error.message));

                })
        }

    }
}

const getProductsRequest = () => {

    return {

        type: GP.GET_PRODUCTS_REQUEST
    }

}


const getProductsSuccess = (response) => {

    return {

        type: GP.GET_PRODUCTS_SUCCESS,
        payload: response
    }

}


const getProductsFailure = (error) => {

    return {

        type: GP.GET_PRODUCTS_FAILURE,
        payload: error
    }

}