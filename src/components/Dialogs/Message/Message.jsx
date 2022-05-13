import React from 'react';
import s from './Message.module.scss'

function Message(props) {
    return (
        <div className={s.message}>
            <div className={s.message__img}>
                <img
                    src="https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg"
                    alt=""/>
            </div>
            <div className={s.message__content}>
                <div className={s.message__top}>
                    <div className={s.message__name}>
                        {props.name}
                    </div>
                    <div className={s.message__data}>  {props.data} </div>
                </div>
                <div className={s.message__text}>
                    {props.message}
                </div>
            </div>
        </div>
    );
}


export default Message;