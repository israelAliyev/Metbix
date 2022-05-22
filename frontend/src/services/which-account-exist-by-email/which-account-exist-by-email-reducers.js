import * as WAE from './which-account-exist-by-email-types';

const INITIAL_STATE = {
    response : undefined,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case WAE.WHICH_ACCOUNT_EXIST_REQUEST:
            return{
                ...state
            };
        case WAE.WHICH_ACCOUNT_EXIST_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case WAE.WHICH_ACCOUNT_EXIST_FAILURE :
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