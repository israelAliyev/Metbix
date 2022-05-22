import * as GUT from "./get-user-types";
import axios from "axios";

export const getUserById = (id) => {

    return async dispatch => {

        if (id)

        dispatch(getUserRequest());

        await axios.get("http://localhost:8080/api/user/info/" + id)
            .then((response) => {

                    dispatch(getUserSuccess(response.data));

            }).catch((error) => {

            dispatch(getUserFailure(error.message));
        })
    }
}

export const getUserByEmail = (email) => {

    return async dispatch => {

        if (email)

            dispatch(getUserRequest());

        await axios.get("http://localhost:8080/api/user/info-by-email/"+email)
            .then((response) => {

                dispatch(getUserSuccess(response.data));

            }).catch((error) => {

                dispatch(getUserFailure(error.message));
            })
    }
}



const getUserRequest = () => {

    return {

        type: GUT.GET_USER_REQUEST
    }

}


const getUserSuccess = (account) => {

    return {

        type: GUT.GET_USER_SUCCESS,
        payload:account
    }

}


const getUserFailure = (error) => {

    return {

        type: GUT.GET_USER_FAILURE,
        payload:error
    }

}