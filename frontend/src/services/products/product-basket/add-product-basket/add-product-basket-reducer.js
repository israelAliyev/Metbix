import * as APB from './add-product-basket-types';

const INITIAL_STATE = {
    response : undefined,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case APB.ADD_PRODUCT_BASKET_REQUEST:
            return{
                ...state
            };
        case APB.ADD_PRODUCT_BASKET_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case APB.ADD_PRODUCT_BASKET_FAILURE :
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