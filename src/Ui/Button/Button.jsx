import React from 'react';
import s from './Button.module.scss'
function Button({value}) {
    return (
        <button className={s.btn}>{value}</button>
    );
}

export default Button;