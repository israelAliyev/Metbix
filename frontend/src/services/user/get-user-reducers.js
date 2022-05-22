import * as GUT from './get-user-types';

const INITIAL_STATE = {
    response : null,
    error:null
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case GUT.GET_USER_REQUEST:
            return{
                ...state
            };
        case GUT.GET_USER_SUCCESS:
            return{
                response : action.payload,
                error : null
            };
        case GUT.GET_USER_FAILURE:
            return{
                response : null,
                error : action.payload
            };

        default:
            return state;
    }

}


export default reducer;