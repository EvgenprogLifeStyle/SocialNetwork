import React from 'react';
import s from './Textarea.module.scss'
const Textarea = ({input, meta, ...props}) => {


    const error = meta.touched && meta.error;
    return (
        <div className={`${s.form__control} ${error && s.form__control_error}`}>
            <textarea {...input} {...props}></textarea>
            {error && <span>{meta.error}</span>}
        </div>
    )

};

export default Textarea;