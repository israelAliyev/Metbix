import * as RT from "./register-types";
import axios from "axios";

export const registerUser = (user) => {

    return async dispatch => {

        if (user.userEmail)

        dispatch(postRegisterRequest());

        await axios.post("http://localhost:8080/api/registration/user" , user)
            .then((response) => {


                if (response.data.indexOf('taken') > -1){
                    dispatch(postRegisterFailure(response.data));
                }else {
                    dispatch(postRegisterSuccess(response.data));
                }
            }).catch((error) => {

            dispatch(postRegisterFailure(error.message));
        })
    }
}


export const registerCompany = (company) => {

    return async dispatch => {

        dispatch(postRegisterRequest());

        axios.post("http://localhost:8080/api/registration/company" , company)
            .then((response) => {

                if (response.data.indexOf('taken') > -1){
                    dispatch(postRegisterFailure(response.data));
                }else {
                    dispatch(postRegisterSuccess(response.data));
                }
            }).catch((error) => {

            dispatch(postRegisterFailure(error.message));
        })
    }
}


const postRegisterRequest = () => {

    return {

        type: RT.POST_REGISTER_REQUEST
    }

}


const postRegisterSuccess = (account) => {

    return {

        type: RT.POST_REGISTER_SUCCESS,
        payload:account
    }

}


const postRegisterFailure = (error) => {

    return {

        type: RT.POST_REGISTER_FAILURE,
        payload:error
    }

}