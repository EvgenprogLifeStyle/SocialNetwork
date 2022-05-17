// import React from 'react';
import {addMessageCreator, updateMessageCreator} from "../../Redux/DialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return (
        {
            state: state.dataDialogs,
            isAuth: state.auth.isAuth
        }

    )
}
let mapDispatchToProps = (dispatch) => {
    return (
        {
            onNewMessageChange: (text) => dispatch(updateMessageCreator(text)),
            onSendMessageClick: () => dispatch(addMessageCreator()),
        }
    )
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;



