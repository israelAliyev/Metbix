import * as GCT from './get-company-types';

const INITIAL_STATE = {
    response : null,
    error:null
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case GCT.GET_COMPANY_REQUEST:
            return{
                ...state
            };
        case GCT.GET_COMPANY_SUCCESS:
            return{
                response : action.payload,
                error : null
            };
        case GCT.GET_COMPANY_FAILURE:
            return{
                response : null,
                error : action.payload
            };

        default:
            return state;
    }

}


export default reducer;