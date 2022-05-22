import * as TLP from './top-liked-products-types';

const INITIAL_STATE = {
    response : null,
    error:''
}

const reducer = (state=INITIAL_STATE , action  ) => {


    switch (action.type){
        case TLP.TOP_LIKED_PRODUCTS_REQUEST:
            return{
                ...state
            };
        case TLP.TOP_LIKED_PRODUCTS_SUCCESS:
            const response = action.payload;
            return{
                response:response,
                error : ''
            };
        case TLP.TOP_LIKED_PRODUCTS_FAILURE:
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