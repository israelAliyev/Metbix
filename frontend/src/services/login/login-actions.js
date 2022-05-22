import * as LT from "./login-types";
import axios from "axios";

export const loginAccount = (account) => {

    return async dispatch => {

        if (account.email) {

            dispatch(postLoginRequest());

            await axios.post("http://localhost:8080/api/auth/signing", account)
                .then((response) => {

                    if (response.data.success === false) {
                        dispatch(postLoginFailure(response.data.message));
                    } else if (typeof response.data !== 'object') {
                        dispatch(postLoginFailure(response.data));
                    } else {
                        dispatch(postLoginSuccess(response.data));
                    }

                }).catch((error) => {

                    dispatch(postLoginFailure(error.message));

                })
        }

    }
}


export const loginAccountSocial = (account) => {

    return async dispatch => {

        if (account.password) {

            let account2 = {...account, password: atob(account.password.substring(36))}

            dispatch(postLoginRequest());

            await axios.post("http://localhost:8080/api/auth/signing", account2)
                .then((response) => {

                    if (response.data.success === false) {
                        dispatch(postLoginFailure(response.data.message));
                    } else if (typeof response.data !== 'object') {
                        dispatch(postLoginFailure(response.data));
                    } else {
                        dispatch(postLoginSuccess(response.data));
                    }

                }).catch((error) => {

                    dispatch(postLoginFailure(error.message));

                });

        }
    }
}


const postLoginRequest = () => {

    return {

        type: LT.POST_LOGIN_REQUEST
    }

}


const postLoginSuccess = (response) => {

    return {

        type: LT.POST_LOGIN_SUCCESS,
        payload: response
    }

}


const postLoginFailure = (error) => {

    return {

        type: LT.POST_LOGIN_FAILURE,
        payload: error
    }

}