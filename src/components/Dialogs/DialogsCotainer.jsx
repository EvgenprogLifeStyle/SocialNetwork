// import React from 'react';
import {addMessageCreator, updateMessageCreator} from "../../Redux/DialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";


// const DialogsContainer = () => {
//
//     const dispatch = useDispatch()
//     const state = useSelector(state => state.dataDialogs)
//     let newMessageChange = state.newMessage
//
//
//     const onNewMessageChange = (e) => {
//         let text = e.target.value
//         dispatch(updateMessageCreator(text))
//     }
//     const onSendMessageClick = () => dispatch(addMessageCreator())
//
//     return (
//         <Dialogs
//             state={state}
//             onNewMessageChange={onNewMessageChange}
//             onSendMessageClick={onSendMessageClick}
//             newMessageChange={newMessageChange}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return (
        {state: state.dataDialogs}

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



