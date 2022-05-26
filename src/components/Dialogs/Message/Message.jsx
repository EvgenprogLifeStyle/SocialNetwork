import React from 'react';
import s from './Message.module.scss'

function Message(props) {
    return (
        <div className={s.message}>
            <div className={s.message__img}>
                <img
                    src={props.avatar}
                    alt={props.name}/>
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