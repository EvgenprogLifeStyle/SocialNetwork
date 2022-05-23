import React from 'react';
import s from './Input.module.scss'
const Input = ({input, meta,type, ...props}) => {
    // console.log(meta)

    const error = meta.touched && meta.error;
    return (
        <div className={`${s.form__control} ${error && s.form__control_error}`}>
            <input {...input} {...props}  type={type} />
            {error && <span>{meta.error}</span>}
        </div>
    )

};

export default Input;