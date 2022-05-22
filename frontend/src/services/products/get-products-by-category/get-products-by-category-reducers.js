import * as GP from './get-products-by-category-types';

const INITIAL_STATE = {
    response : null,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case GP.GET_PRODUCTS_REQUEST:
            return{
                ...state
            };
        case GP.GET_PRODUCTS_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case GP.GET_PRODUCTS_FAILURE :
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