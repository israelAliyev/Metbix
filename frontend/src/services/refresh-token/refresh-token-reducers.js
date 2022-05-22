import * as RT from './refresh-token-types';

const INITIAL_STATE = {
    response : null,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case RT.REFRESH_TOKEN_REQUEST:
            return{
                ...state
            };
        case RT.REFRESH_TOKEN_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case RT.REFRESH_TOKEN_FAILURE:
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