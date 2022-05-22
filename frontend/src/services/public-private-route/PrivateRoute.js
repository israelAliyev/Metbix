import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} component={(props) => {
            const account = localStorage.getItem("__|^|__") ? JSON.parse(localStorage.getItem("__|^|__")) : null;

            if(account){
                return <Component {...props} />
            }else{
                return <Redirect to={`/login`} />
            }

        }} />
    )

}

export default PrivateRoute
