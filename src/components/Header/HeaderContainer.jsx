import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/AuthReducer";

function HeaderContainer(props) {

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {

                if (response.data.resultCode === 0) props.setUserData(response.data.data)
            })
    }, []);
    return (
        <Header {...props} />
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer);