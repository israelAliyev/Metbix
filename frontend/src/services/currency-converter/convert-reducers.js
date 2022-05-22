import * as CT from './convert-types';

const INITIAL_STATE = {
    response : null,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {

    switch (action.type){

        case CT.CONVERT_REQUEST:
            return{
                ...state
            };

        case CT.CONVERT_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };

        case CT.CONVERT_FAILURE:
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