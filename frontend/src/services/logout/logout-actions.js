import * as LOT from "./logout-types";
import axios from "axios";

export const postLogout = (account) => {

    return async dispatch => {

        if (account.email) {

            dispatch(postLogoutRequest());

            await axios.post("http://localhost:8080/api/auth/signing", account)
                .then((response) => {

                    localStorage.removeItem("__|^|__");
                    window.location.href = '/';

                }).catch((error) => {

                    dispatch(postLogoutFailure(error.message));

                })
        }

    }
}


const postLogoutRequest = () => {

    return {

        type: LOT.POST_LOGOUT_REQUEST
    }

}


const postLogoutSuccess = (response) => {

    return {

        type: LOT.POST_LOGOUT_SUCCESS,
        payload: response
    }

}


const postLogoutFailure = (error) => {

    return {

        type: LOT.POST_LOGOUT_FAILURE,
        payload: error
    }

}