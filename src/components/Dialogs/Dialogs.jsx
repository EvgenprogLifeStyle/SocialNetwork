import React from 'react';
import s from './Dialogs.module.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import imgSend from './../../send.svg'
import {Field, reduxForm} from "redux-form";
import Textarea from "../../Ui/Textarea/Textarea";
import {maxLengthCreator, required} from "../../Utils/validator";

function dT() {
    const date = new Date();
    const hours = "0" + date.getHours();
    const minutes = "0" + date.getMinutes();
    return hours.substr(-2) + ":" + minutes.substr(-2);
}
let maxLengthCreator100 = maxLengthCreator(100)
function Dialogs(props) {

    const AddOnSubmitMessage = (data) => props.onSendMessageClick(data.message)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {props.state.dialogs.map((el, idx) =>
                    <DialogItem key={idx} link="/dialogs" name={el.name} id={el.id}/>
                )}
            </div>
            <div className={s.dialogs__messages}>
                <div className={s.dialogs__content}>
                    {props.state.message.map((el, idx) =>
                        <Message key={idx} message={el.text} name={el.name} data={dT()}/>
                    )}
                </div>
                <div className={s.add_message}>
                    <MessageReduxForm {...props} onSubmit={AddOnSubmitMessage}/>
                </div>
            </div>
        </div>
    );
}

const FormMessageAdd = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.add_message__body}>
            <Field component={Textarea}
                   name='message'
                   validate={[required, maxLengthCreator100 ]}
                   placeholder="Enter your message"
                   className={s.add_message__text}/>
            <button className={s.add_message__btn}>
                <img src={imgSend} alt="Оправить"/>
            </button>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'message'})(FormMessageAdd)

export default Dialogs;