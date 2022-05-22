import * as GA from './get-account-types';

const INITIAL_STATE = {
    response: undefined,
    error: ''
}

const reducerGetAccount = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case GA.GET_ACCOUNT_REQUEST:
            return {
                ...state
            };

        case GA.GET_ACCOUNT_SUCCESS:
            return {
                response: action.payload,
                error: ''
            };

        case GA.GET_ACCOUNT_FAILURE:
            return {
                response: '',
                error: action.payload
            };

        default:
            return state;
    }

}


export default reducerGetAccount;