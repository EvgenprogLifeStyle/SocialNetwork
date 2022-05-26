import React, {useEffect, useRef, useState} from 'react';
import s from './Dialogs.module.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import imgSend from '../../assets/img/send.svg'
import {Field, reduxForm} from "redux-form";
import Textarea from "../../Ui/Textarea/Textarea";
import {maxLengthCreator, required} from "../../Utils/validator";
import {addMessage} from "../../Redux/DialogReducer";
import {setUserData} from "../../Redux/AuthReducer";

function timeCustom() {
    const date = new Date();
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours.substr(-2) + ":" + minutes.substr(-2);
}

let maxLengthCreator100 = maxLengthCreator(100)


function Dialogs({state, profile, userId, setUserData, addMessage, ...props}) {

    const [val, setVal] = useState('')

    useEffect(() => {
        setUserData(userId)
    }, [userId])

    const AddOnSubmitMessage = (data) => {
        addMessage(({message: data.message, name: profile.fullName, time: timeCustom(), avatar: profile.photos.large}))
        setVal('')
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {state.dialogs.map((el, idx) =>
                    <DialogItem key={idx} link="/dialogs" name={el.name} id={el.id}/>
                )}
            </div>
            <div className={s.dialogs__messages}>
                <div className={s.dialogs__content}>
                    {state.message.map((el, idx) =>
                        <Message key={idx} message={el.text} name={el.name} data={el.time} avatar={el.avatar}/>
                    )}
                </div>
                <div className={s.add_message}>
                    <MessageReduxForm {...props} onSubmit={AddOnSubmitMessage} val={val}/>
                </div>
            </div>
        </div>
    );
}

const FormMessageAdd = ({handleSubmit, val}) => {
    return (
        <form onSubmit={handleSubmit} className={s.add_message__body}>
            <Field component={Textarea}
                   name='message'
                   validate={[required, maxLengthCreator100]}
                   placeholder="Enter your message"
                   className={s.add_message__text}
                   value={val}/>
            <button className={s.add_message__btn}>
                <img src={imgSend} alt="Оправить"/>
            </button>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'message'}, null)(FormMessageAdd)

export default Dialogs;