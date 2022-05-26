import React from 'react';
import s from './Login.module.scss'
import LoginReduxForm from "./Form/LoginForm";
import LoginForm from "./Form/LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/AuthReducer";
import {reduxForm} from "redux-form";
import {Navigate, useNavigate} from "react-router-dom";


function Login({isAuth, login, captchaImg}) {
    let navigate = useNavigate();
    // console.log(navigate + '234')
    // if (isAuth === true) return <Navigate replace to="/profile"/>


    const onSubmitForm = (data) => {
        login(data.email, data.password, data.rememberMe, data.captcha)
    }

    const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

    return (

        <div className={s.wrap}>

            <h1>Login</h1>
            {/*<LoginReduxForm onSubmit={onSubmit} captchaImg={captchaImg}/>*/}
            <LoginReduxForm onSubmit={onSubmitForm} captchaImg={captchaImg}/>
        </div>
    );
}


const mapStateToProps = (state) => ({isAuth: state.auth.isAuth, captchaImg: state.auth.captchaImg})

const LoginContainer = connect(mapStateToProps, {login, logout})(Login)

export default LoginContainer;