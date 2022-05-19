// import React from 'react';
import {addMessageCreator, updateMessageCreator} from "../../Redux/DialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => ({state: state.dataDialogs})

let mapDispatchToProps = (dispatch) => {
    return (
        {
            onSendMessageClick: (message) => dispatch(addMessageCreator(message)),
        }
    )
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)