import * as GPSBCN from './get-profiles-by-company-name-types';

const INITIAL_STATE = {
    response : null,
    error:null
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case GPSBCN.GET_PROFILES_BY_COMPANYNAME_REQUEST:
            return{
                ...state
            };
        case GPSBCN.GET_PROFILES_BY_COMPANYNAME_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : null
            };
        case GPSBCN.GET_PROFILES_BY_COMPANYNAME_FAILURE:
            const error = action.payload;
            return{
                response : null,
                error:error
            };

        default:
            return state;
    }

}


export default reducer;