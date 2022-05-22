import * as LT from './login-types';

const INITIAL_STATE = {
    response : undefined,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case LT.POST_LOGIN_REQUEST:
            return{
                ...state
            };
        case LT.POST_LOGIN_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case LT.POST_LOGIN_FAILURE :
            const error = action.payload;
            return{
                response : undefined,
                error:error
            };

        default:
            return state;
    }

}


export default reducer;