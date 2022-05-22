import * as GPSBUN from './get-profiles-by-user-name-types';

const INITIAL_STATE = {
    response : null,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case GPSBUN.GET_PROFILES_BY_USERNAME_REQUEST:
            return{
                ...state
            };
        case GPSBUN.GET_PROFILES_BY_USERNAME_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : null
            };
        case GPSBUN.GET_PROFILES_BY_USERNAME_FAILURE:
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