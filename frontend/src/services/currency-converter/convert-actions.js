import * as CT from "./convert-types";
import axios from "axios";

export const convertCurrency = () => {

    return async dispatch => {

        const app_currency = JSON.parse(localStorage.getItem("currency"))

        dispatch(convertRequest());

        axios.get(`https://open.er-api.com/v6/latest/${app_currency && app_currency.id ? app_currency.id : "USD"}`)

            .then((response) => {

                dispatch(convertSuccess({

                    data: response.data.rates,
                    symbol: app_currency && app_currency.currencySymbol ? app_currency.currencySymbol : app_currency && app_currency.id ? app_currency.id : "$",
                }))

            }).catch((error) => {
            dispatch(convertFailure(error));
        })

    }
}


const convertRequest = () => {

    return {

        type: CT.CONVERT_REQUEST
    }

}


const convertSuccess = (response) => {

    return {

        type: CT.CONVERT_SUCCESS,
        payload: response
    }

}


const convertFailure = (error) => {

    return {

        type: CT.CONVERT_FAILURE,
        payload: error
    }

}