import * as CT from '../countries/countries-types'
import axios from "axios";



export const fetchCountries = () => {

    return async dispatch => {

        dispatch(fetchCountriesRequest());

        axios.get("https://restcountries.eu/rest/v2/all")
            .then((response) => {

                dispatch(fetchCountriesSuccess(response.data));

            }).catch((error) => {

            dispatch(fetchCountriesFailure(error.message));

        })

    }

}


const fetchCountriesRequest = () => {

    return {

        type: CT.FETCH_COUNTRIES_REQUEST
    }

}


const fetchCountriesSuccess = (countries) => {

    return {

        type: CT.FETCH_COUNTRIES_SUCCESS,
        payload:countries
    }

}


const fetchCountriesFailure = (error) => {

    return {

        type: CT.FETCH_COUNTRIES_FAILURE,
        payload:error
    }

}