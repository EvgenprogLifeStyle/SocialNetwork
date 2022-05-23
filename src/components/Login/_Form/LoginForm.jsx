import React from 'react';
import s from "./LoginForm.module.scss";
import {Field, reduxForm} from "redux-form";
import Input from "../../../Ui/Input/Input";
import {maxLengthCreator, required} from "../../../Utils/validator";

const maxLengthCreator30 = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.form__control}>
                <Field component={Input} type="text" name='email' placeholder="Login"
                       validate={[required, maxLengthCreator30]}/>
            </div>
            <div className={s.form__control}>
                <Field component={Input} type="text" name='password' placeholder="Password"
                       validate={[required, maxLengthCreator30]}/>
            </div>
            <div className={`${s.form__control} ${s.form__control_checkbox}`}>
                <Field component={Input} type="checkbox" name='checkbox'/> remember me
            </div>
            <div className={s.form__control}>
                <button className={`btn ${s.button}`}>Login</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

export default LoginReduxForm;