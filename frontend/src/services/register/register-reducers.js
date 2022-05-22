import * as RT from './register-types';

const INITIAL_STATE = {
    response : '',
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case RT.POST_REGISTER_REQUEST:
            return{
                ...state
            };
        case RT.POST_REGISTER_SUCCESS:
            return{
                response : action.payload,
                error : ''
            };
        case RT.POST_REGISTER_FAILURE :
            return{
                response : '',
                error : action.payload
            };

        default:
            return state;
    }

}


export default reducer;