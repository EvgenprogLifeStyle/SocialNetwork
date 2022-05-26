import s from "./LoginForm.module.scss";
import {Field} from "redux-form";
import Input from "../../../Ui/Input/Input";
import {maxLengthCreator, required} from "../../../Utils/validator";
import React from "react";


const maxLengthCreator30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error, captchaImg}) => {
    return (
        <form className={s.form} onSubmit={handleSubmit}>
            {error && <div className={s._error}>{error}</div>}
            {captchaImg && <div><img src={captchaImg} alt="captcha"/></div>}
            {captchaImg && <Field component={Input} type="text" name='captcha' placeholder="Symbols from image"
                   validate={[required]}/>  }

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
export default LoginForm