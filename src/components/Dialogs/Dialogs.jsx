import React from 'react';
import s from './Dialogs.module.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import imgSend from './../../send.svg'


function Dialogs(props) {

    // let newMessage = useSelector(state=> state.dataDialogs.newMessage)
     let newMessage = props.state.newMessage

    const sendMessage = () => {
        props.onSendMessageClick()
    }
    const messageChange = (e) => {
        let text = e.target.value
        props.onNewMessageChange(text)
    }
    function dT( ) {
        const date = new Date();
        const hours = "0" + date.getHours();
        const minutes = "0" + date.getMinutes();
        return hours.substr(-2) + ":" + minutes.substr(-2);
    }
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
                    <div className={s.add_message__body}>
                        <textarea value={newMessage}
                                  onChange={messageChange}
                                  placeholder="Enter your message"
                                  className={s.add_message__text}></textarea>
                        <button onClick={sendMessage} className={s.add_message__btn}>
                            <img src={imgSend} alt="Оправить"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;