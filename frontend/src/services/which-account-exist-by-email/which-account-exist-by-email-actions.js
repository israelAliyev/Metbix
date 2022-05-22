import * as WAE from "./which-account-exist-by-email-types";
import axios from "axios";

export const whichAccountExistByEmail = (email) => {

    return async dispatch => {


        dispatch(whichAccountExistByEmailRequest());

        await axios.get("http://localhost:8080/api/products/which-account-exist-by-email/"+email)
            .then((response) => {

                dispatch(whichAccountExistByEmailSuccess(response.data));

            }).catch((error) => {

                dispatch(whichAccountExistByEmailFailure(error.message));

            })

    }
}


const whichAccountExistByEmailRequest = () => {

    return {

        type: WAE.WHICH_ACCOUNT_EXIST_REQUEST
    }

}


const whichAccountExistByEmailSuccess = (response) => {

    return {

        type: WAE.WHICH_ACCOUNT_EXIST_SUCCESS,
        payload: response
    }

}


const whichAccountExistByEmailFailure = (error) => {

    return {

        type: WAE.WHICH_ACCOUNT_EXIST_FAILURE,
        payload: error
    }

}