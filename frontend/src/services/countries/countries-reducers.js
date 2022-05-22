import * as CT from '../countries/countries-types';

const INITIAL_STATE = {
    countries: [],
    error: ''
}

const reducer = (state=INITIAL_STATE , action) => {

    switch (action.type){
        case CT.FETCH_COUNTRIES_REQUEST:
            return{
                ...state
            };
        case CT.FETCH_COUNTRIES_SUCCESS:
            return{
                countries : action.payload,
                error : ''
            };
        case CT.FETCH_COUNTRIES_FAILURE :
            return{
                countries : [],
                error : action.payload
            };

        default:
            return state;
    }

}

export default reducer;