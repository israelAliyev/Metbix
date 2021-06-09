
import * as ST from './sidebar-types';


  export const show_sidebar = (bool) => {

      return dispatch => {

          dispatch({
              type : ST.SHOW_SIDEBAR,
              payload : bool
          });

      }

  }

