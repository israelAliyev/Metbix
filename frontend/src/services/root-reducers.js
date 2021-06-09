
import {combineReducers} from "redux";
import sidebar_reducer from "./sidebar/sidebar-reducers";


 const root_reducer = combineReducers({
    show_sidebar : sidebar_reducer
 });

 export default root_reducer;