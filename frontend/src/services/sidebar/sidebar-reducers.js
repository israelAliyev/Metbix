import * as ST from './sidebar-types';

const INITIAL_STATE = {
    show_sidebar : false
}



const reducer = (state=INITIAL_STATE , action  ) => {

    switch (action.type){


        case ST.SHOW_SIDEBAR :
            return{
                ...state, show_sidebar: action.payload
            };

        default:
            return state;
    }

}


export default reducer;