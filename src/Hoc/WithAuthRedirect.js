import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

export const WithAuthRedirect = (Component) => {
    const Redirect = (props) => {
        if (!props.isAuth) return <Navigate replace to="/login"/>
        return <Component  {...props}/>
    }

    let mapStateAuthToProps = (state) => ({isAuth: state.auth.isAuth})

    let ConnectedAuthRedirect = connect(mapStateAuthToProps)(Redirect)

    return ConnectedAuthRedirect
}

