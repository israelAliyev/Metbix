import * as RPB from './remove-product-basket-types';

const INITIAL_STATE = {
    response : undefined,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case RPB.REMOVE_PRODUCT_BASKET_REQUEST:
            return{
                ...state
            };
        case RPB.REMOVE_PRODUCT_BASKET_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case RPB.REMOVE_PRODUCT_BASKET_FAILURE :
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