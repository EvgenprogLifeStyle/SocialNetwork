import React, {useState} from 'react';
import s from './Dialogs.module.scss'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import imgSend from './../../send.svg'
import {addMessageCreator, updateMessageCreator} from "../../Redux/DialogReducer";
import {connect, useDispatch, useSelector} from "react-redux";
import Dialogs from "./Dialogs";

const dispatch = useDispatch()

const state = useSelector(state => state.dataDialogs)

let newMessageChange = state.newMessage


let mapStateToProps = (state) => {
    return {
        dataDialogs: state.dataDialogs
    }
}
let mapDispatchToProps = () => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateMessageCreator(text))

        },
        onSendMessageClick: () => {
            dispatch(addMessageCreator())
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(<Dialogs/>)

export default DialogsContainer;