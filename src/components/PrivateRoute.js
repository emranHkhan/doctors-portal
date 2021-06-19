import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAuth } from '../context/Authcontext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route {...rest} render={props => {
            return user?.email ? <Component {...props} /> : <Redirect to='/' />
        }}
        ></Route>
    );
};

export default PrivateRoute;