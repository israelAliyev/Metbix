import * as GPB from './get-product-basket-types';

const INITIAL_STATE = {
    response : null,
    error:null
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case GPB.GET_PRODUCT_BASKET_REQUEST:
            return{
                ...state
            };
        case GPB.GET_PRODUCT_BASKET_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : null
            };
        case GPB.GET_PRODUCT_BASKET_FAILURE:
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