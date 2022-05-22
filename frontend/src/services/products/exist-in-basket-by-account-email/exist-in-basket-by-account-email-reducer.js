import * as PIB from './exist-in-basket-by-account-email-types';

const INITIAL_STATE = {
    response : undefined,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case PIB.PRODUCT_IN_BASKET_REQUEST:
            return{
                ...state
            };

        case PIB.PRODUCT_IN_BASKET_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };

        case PIB.PRODUCT_IN_BASKET_FAILURE:
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