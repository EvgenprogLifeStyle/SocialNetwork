import React from 'react';
import s from './Login.module.scss'
import LoginReduxForm from "./_Form/LoginForm";
import {connect} from "react-redux";
import {login, logout} from "../../Redux/AuthReducer";
import {maxLengthCreator, required} from "../../Utils/validator";
import {Field, reduxForm} from "redux-form";
import Input from "../../Ui/Input/Input";
import {Navigate} from "react-router-dom";


const maxLengthCreator30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error, captchaImg}) => {
    debugger
    return (
        <form className={s.form} onSubmit={handleSubmit}>



            {error && <div className={s._error}>{error}</div>}
            {captchaImg && <div><img src={captchaImg} alt="captcha"/></div>}

            <div className={s.form__control}>
                <Field component={Input} type="text" name='email' placeholder="Login"
                       validate={[required, maxLengthCreator30]}/>
            </div>
            <div className={s.form__control}>
                <Field component={Input} type="text" name='password' placeholder="Password"
                       validate={[required, maxLengthCreator30]}/>
            </div>
            <div className={`${s.form__control} ${s.form__control_checkbox}`}>
                <Field component="input" type="checkbox" name='rememberMe'/> remember me
            </div>
            <div className={s.form__control}>
                <button className={`btn ${s.button}`}>Login</button>
            </div>
        </form>
    );
};

function Login({isAuth, login, captchaImg}) {

    if (isAuth === true) return <Navigate replace to="/profile"/>
    const onSubmit = (data) => login(data.email, data.password, data.rememberMe)
    const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

    return (
        <div className={s.wrap}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaImg={captchaImg}/>
        </div>
    );
}




const mapStateToProps = (state) => ({isAuth: state.auth.isAuth, captchaImg: state.auth.captchaImg})

const LoginContainer = connect(mapStateToProps, {login, logout})(Login)

export default LoginContainer;