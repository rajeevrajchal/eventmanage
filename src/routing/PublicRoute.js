import React from 'react';
import {connect} from "react-redux";
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, isLoggedIn, ...rest }) => {
    return (
        <Route {...rest} render={
            props => isLoggedIn ? (<Redirect to="/dashboard" />) :
                (<Component {...props} />)
        }
        />
    );
};


const mapStateToProps = (state) => {
    return {
        isLoggedIn:state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps)(PublicRoute);