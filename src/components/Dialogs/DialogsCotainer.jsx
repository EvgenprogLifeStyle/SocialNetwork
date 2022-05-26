// import React from 'react';
import {addMessage} from "../../Redux/DialogReducer";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";
import {setUserData} from "../../Redux/ProfileReducer";



let mapStateToProps = (state) => ({
    state: state.dataDialogs,
    userId: state.auth.id,
    profile: state.dataProfile.profile
})


export default compose(
    connect(mapStateToProps, {addMessage, setUserData}),
    WithAuthRedirect
)(Dialogs)