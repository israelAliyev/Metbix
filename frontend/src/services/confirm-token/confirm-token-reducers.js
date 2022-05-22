import * as CTT from "./confirm-token-types"

const INITIAL_STATE = {
    response : undefined,
    error:undefined
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case CTT.CONFIRM_TOKEN_REQUEST:
            return{
                ...state
            };
        case CTT.CONFIRM_TOKEN_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : undefined
            };
        case CTT.CONFIRM_TOKEN_FAILURE:
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