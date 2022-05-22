import * as FP from './filter-products-types';

const INITIAL_STATE = {
    response : null,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case FP.FILTER_PRODUCTS_REQUEST:
            return{
                ...state
            };
        case FP.FILTER_PRODUCTS_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case FP.FILTER_PRODUCTS_FAILURE :
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