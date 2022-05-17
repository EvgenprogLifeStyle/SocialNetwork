import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setLogin} from "../../Redux/AuthReducer";

function HeaderContainer(props) {
    useEffect(() => props.setLogin(), []);
    return <Header {...props} />
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setLogin})(HeaderContainer);