import * as TRP from './top-requested-products-types';

const INITIAL_STATE = {
    response : null,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case TRP.TOP_REQUESTED_PRODUCTS_REQUEST:
            return{
                ...state
            };
        case TRP.TOP_REQUESTED_PRODUCTS_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case TRP.TOP_REQUESTED_PRODUCTS_FAILURE:
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