import * as RT from "./refresh-token-types";
import axios from "axios";

export const  refreshToken = (token_request) => {

    return async dispatch => {

        if (token_request) {

            dispatch(refreshTokenRequest());

            await axios.post("http://localhost:8080/api/auth/refresh", token_request)
                .then((response) => {

                    // TODO: To call function according to the response

                    if (response.data.success === false) {
                        dispatch(refreshTokenFailure(response.data.message));
                    } else if (typeof response.data !== 'object') {
                        dispatch(refreshTokenFailure(response.data));
                    } else {
                        dispatch(refreshTokenSuccess(response.data));
                    }

                }).catch((error) => {

                    dispatch(refreshTokenFailure(error.message));
                })
        }

    }
}


const refreshTokenRequest = () => {

    return {

        type: RT.REFRESH_TOKEN_REQUEST
    }

}


const refreshTokenSuccess = (response) => {

    return {

        type: RT.REFRESH_TOKEN_SUCCESS,
        payload: response
    }

}


const refreshTokenFailure = (error) => {

    return {

        type: RT.REFRESH_TOKEN_FAILURE,
        payload: error
    }

}