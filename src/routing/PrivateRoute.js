import React from 'react';
import {connect} from "react-redux";
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
        <Route {...rest} render={
            props => !isLoggedIn ? (<Redirect to="/getting-started" />) :
                (<Component {...props} />)
        }
        />
    );
};

const mapStoreToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStoreToProps)(PrivateRoute)