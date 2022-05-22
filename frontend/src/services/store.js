import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import root_reducer from "./root-reducers";
import authToken from "./auth-access-token/authToken";

const store = createStore(root_reducer, applyMiddleware(thunk));

const account = localStorage.getItem("__|^|__") ? JSON.parse(localStorage.getItem("__|^|__")) : null;


if (account) {

    authToken(atob(account.rtoyui));
}

export default store;