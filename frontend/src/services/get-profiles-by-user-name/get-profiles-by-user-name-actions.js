import * as GPSBUN from "./get-profiles-by-user-name-types";
import axios from "axios";

export const getProfilesByUserName = (name) => {

    return async dispatch => {

        if (name) {

            dispatch(getProfilesByUserNameRequest());

            await axios.get("http://localhost:8080/api/user/search-by-name/"+name)
                .then((response) => {

                    dispatch(getProfilesByUserNameSuccess(response.data));

                }).catch((error) => {

                    dispatch(getProfilesByUserNameFailure(error.message));

                })
        }

    }
}


const getProfilesByUserNameRequest = () => {

    return {

        type: GPSBUN.GET_PROFILES_BY_USERNAME_REQUEST
    }

}


const getProfilesByUserNameSuccess = (response) => {

    return {

        type: GPSBUN.GET_PROFILES_BY_USERNAME_SUCCESS,
        payload: response
    }

}


const getProfilesByUserNameFailure = (error) => {

    return {

        type: GPSBUN.GET_PROFILES_BY_USERNAME_FAILURE,
        payload: error
    }

}