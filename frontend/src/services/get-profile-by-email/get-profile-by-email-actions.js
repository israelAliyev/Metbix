import * as GOBE from "./get-profile-by-email-types";
import axios from "axios";

export const getProfileByEmail = (email) => {

    return async dispatch => {

        if (email) {

            dispatch(getProfileByEmailRequest());

            await axios.get("http://localhost:8080/api/user/get-profile-by-email/"+email)
                .then((response) => {

                    dispatch(getProfileByEmailSuccess(response.data));

                }).catch((error) => {

                    dispatch(getProfileByEmailFailure(error.message));

                })
        }

    }
}


const getProfileByEmailRequest = () => {

    return {

        type: GOBE.GET_PROFILE_BY_EMAIL_REQUEST
    }

}


const getProfileByEmailSuccess = (response) => {

    return {

        type: GOBE.GET_PROFILE_BY_EMAIL_SUCCESS,
        payload: response
    }

}


const getProfileByEmailFailure = (error) => {

    return {

        type: GOBE.GET_PROFILE_BY_EMAIL_FAILURE,
        payload: error
    }

}