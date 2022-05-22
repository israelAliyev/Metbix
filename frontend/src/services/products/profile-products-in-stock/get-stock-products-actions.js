import * as GSP from './get-stock-products-types';
import axios from "axios";

export const getUserProductsInStock = (email) => {

    return async dispatch => {

        dispatch(getStockProductsRequest());

        await axios.get(`http://localhost:8080/get-user-products-in-stock/`+email)

            .then((response) => {
                dispatch(getStockProductsSuccess(response.data));
            })
            .catch((error) => {

                dispatch(getStockProductsFailure(error.message));
            })
    }
}

export const getCompanyProductsInStock = (email) => {

    return async dispatch => {

        dispatch(getStockProductsRequest());

        await axios.get(`http://localhost:8080/api/products/get-company-products-in-stock/`+email)

            .then((response) => {
                dispatch(getStockProductsSuccess(response.data));
            })
            .catch((error) => {

                dispatch(getStockProductsFailure(error.message));
            })
    }
}


const getStockProductsRequest = () => {

    return {

        type: GSP.GET_STOCK_PRODUCTS_REQUEST
    }

}


const getStockProductsSuccess = (response) => {

    return {

        type: GSP.GET_STOCK_PRODUCTS_SUCCESS,
        payload: response
    }

}


const getStockProductsFailure = (error) => {

    return {

        type: GSP.GET_STOCK_PRODUCTS_FAILURE,
        payload: error
    }

}