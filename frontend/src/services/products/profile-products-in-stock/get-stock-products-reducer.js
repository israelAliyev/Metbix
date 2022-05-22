import * as GSP from './get-stock-products-types';

const INITIAL_STATE = {
    response : null,
    error:null
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case GSP.GET_STOCK_PRODUCTS_REQUEST:
            return{
                ...state
            };
        case GSP.GET_STOCK_PRODUCTS_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : null
            };
        case GSP.GET_STOCK_PRODUCTS_FAILURE:
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