import * as GCT from "./get-company-types";
import axios from "axios";

export const getCompanyById = (id) => {

    return async dispatch => {

        if (id)

            dispatch(getCompanyRequest());

        await axios.get("http://localhost:8080/api/company/info/" + id)
            .then((response) => {

                dispatch(getCompanySuccess(response.data));

            }).catch((error) => {

                dispatch(getCompanyFailure(error.message));
            })
    }
}

export const getCompanyByEmail = (email) => {

    return async dispatch => {

        if (email)

            dispatch(getCompanyRequest());

        await axios.get("http://localhost:8080/api/company/info-by-email/" + email)
            .then((response) => {

                dispatch(getCompanySuccess(response.data));

            }).catch((error) => {

                dispatch(getCompanyFailure(error.message));
            })
    }
}



const getCompanyRequest = () => {

    return {

        type: GCT.GET_COMPANY_REQUEST
    }

}


const getCompanySuccess = (account) => {

    return {

        type: GCT.GET_COMPANY_SUCCESS,
        payload: account
    }

}


const getCompanyFailure = (error) => {

    return {

        type: GCT.GET_COMPANY_FAILURE,
        payload: error
    }

}