import React, {useState} from 'react';
import s from './Dialogs.module.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import imgSend from './../../send.svg'
import {addMessageCreator, updateMessageCreator} from "../../Redux/DialogReducer";
import {useDispatch, useSelector} from "react-redux";

function Dialogs() {

    const dispatch = useDispatch()
    const [st, St] = useState('')
    const state = useSelector(state => state.dataDialogs)

    let newMessageChange = state.newMessage

    let onNewMessageChange = (e) => {
        let text = e.target.value
        dispatch(updateMessageCreator(text))
    }
    let onSendMessageClick = () => {
        dispatch(addMessageCreator())
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
                        <Message key={idx} message={el.text} name={el.name} data={el.id}/>
                    )}
                </div>

                <div className={s.add_message}>
                    <div className={s.add_message__body}>
                        <textarea value={newMessageChange}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"
                                  className={s.add_message__text}></textarea>
                        <button onClick={onSendMessageClick} className={s.add_message__btn}>
                            <img src={imgSend} alt="Оправить"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;