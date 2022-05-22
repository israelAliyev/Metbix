import * as PI from './product-info-types';

const INITIAL_STATE = {
    response : undefined,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case PI.PRODUCT_INFO_REQUEST:
            return{
                ...state
            };

        case PI.PRODUCT_INFO_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };

        case PI.PRODUCT_INFO_FAILURE:
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