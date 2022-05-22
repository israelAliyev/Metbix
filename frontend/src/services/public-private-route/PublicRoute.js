import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} component={(props) => {
            const account = localStorage.getItem("__|^|__") ? JSON.parse(localStorage.getItem("__|^|__")) : null;

            if(account){
                return <Redirect to={`/`} />
            }else{
                return <Component {...props} />
            }

        }} />
    )

}

export default PublicRoute
