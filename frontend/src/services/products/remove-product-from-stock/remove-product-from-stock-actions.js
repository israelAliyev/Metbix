import * as RPFS from './remove-product-from-stock-types';
import axios from "axios";

export const removeProductFromStock= (id) => {

    return async dispatch => {

        dispatch(removeProductFromStockRequest());

        await axios.psot(`http://localhost:8080/remove-product-by-id/`+id)

            .then((response) => {
                dispatch(removeProductFromStockSuccess(response.data));
            })
            .catch((error) => {

                dispatch(removeProductFromStockFailure(error.message));
            })
    }
}



const removeProductFromStockRequest = () => {

    return {

        type: RPFS.REMOVE_PRODUCT_FROM_STOCK_REQUEST
    }

}


const removeProductFromStockSuccess = (response) => {

    return {

        type: RPFS.REMOVE_PRODUCT_FROM_STOCK_SUCCESS,
        payload: response
    }

}


const removeProductFromStockFailure = (error) => {

    return {

        type: RPFS.REMOVE_PRODUCT_FROM_STOCK_FAILURE,
        payload: error
    }

}