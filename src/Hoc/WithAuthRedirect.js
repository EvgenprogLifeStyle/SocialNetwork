import React, {useEffect, useState} from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import {setLogin} from "../Redux/AuthReducer";

export const WithAuthRedirect = (Component) => {
    const Redirect = async (props) => {

        // const [loading, setLoading] = useState(false)

        await props.setLogin()
        // setLoading(true)

        // if (loading) {
            console.log(props.isAuth)
            if (!props.isAuth) { return <Navigate replace to="/login"/>}else {
                return <Component  {...props}/>
            }
        // }
    }

    const mapStateAuthToProps = (state) => ({isAuth: state.auth.isAuth})
    const ConnectedAuthRedirect = connect(mapStateAuthToProps, {setLogin})(Redirect)
    return ConnectedAuthRedirect
}

