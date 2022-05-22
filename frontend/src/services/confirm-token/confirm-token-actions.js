import { } from 'firebase';
import * as CTT from "./confirm-token-types"
import axios from "axios";

export const confirmToken = (token) => {

    return async dispatch => {

        if (token) {

            dispatch(confirmTokenRequest());
            
            await axios.get("http://localhost:8080/api/registration/confirm?token="+token)
                .then((response) => {

                    if (response.data.indexOf("not") > -1 || response.data.indexOf("already") > -1) {
                        dispatch(confirmTokenFailure(response.data));
                    } else {
                        dispatch(confirmTokenSuccess(response.data));
                    }

                }).catch((error) => {

                    dispatch(confirmTokenFailure(error.message));

                })
        }


    }

}


const confirmTokenRequest = () => {

    return {

        type: CTT.CONFIRM_TOKEN_REQUEST
    }

}


const confirmTokenSuccess = (response) => {

    return {

        type: CTT.CONFIRM_TOKEN_SUCCESS,
        payload:response
    }

}


const confirmTokenFailure = (error) => {

    return {

        type: CTT.CONFIRM_TOKEN_FAILURE,
        payload:error
    }

}