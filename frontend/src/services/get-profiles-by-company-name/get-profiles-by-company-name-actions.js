import * as GPSBCN from "./get-profiles-by-company-name-types";
import axios from "axios";

export const getProfilesByCompanyName = (name) => {

    return async dispatch => {

        if (name) {

            dispatch(getProfilesByCompanyNameRequest());

            await axios.get("http://localhost:8080/api/company/search-by-name/"+name)
                .then((response) => {

                    dispatch(getProfilesByComapnyNameSuccess(response.data));

                }).catch((error) => {

                    dispatch(getProfilesByCompanyNameFailure(error.message));

                })
        }

    }
}


const getProfilesByCompanyNameRequest = () => {

    return {

        type: GPSBCN.GET_PROFILES_BY_COMPANYNAME_REQUEST
    }

}


const getProfilesByComapnyNameSuccess = (response) => {

    return {

        type: GPSBCN.GET_PROFILES_BY_COMPANYNAME_SUCCESS,
        payload: response
    }

}


const getProfilesByCompanyNameFailure = (error) => {

    return {

        type: GPSBCN.GET_PROFILES_BY_COMPANYNAME_FAILURE,
        payload: error
    }

}