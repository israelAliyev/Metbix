import * as GOBE from './get-profile-by-email-types';

const INITIAL_STATE = {
    response : null,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case GOBE.GET_PROFILE_BY_EMAIL_REQUEST:
            return{
                ...state
            };
        case GOBE.GET_PROFILE_BY_EMAIL_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case GOBE.GET_PROFILE_BY_EMAIL_FAILURE :
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