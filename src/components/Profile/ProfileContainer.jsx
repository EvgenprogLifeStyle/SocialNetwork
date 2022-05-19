import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserData, setUserProfileData, updateStatus} from "../../Redux/ProfileReducer";
import Loader from "../Loader/Loader";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

function ProfileContainer(props) {
    const params = useParams();
    if (!params.userId) params.userId = 23962
    // if (!params.userId) params.userId = 2

    useEffect(() => {
        props.setUserData(params.userId)
        props.getStatus(params.userId)

    }, []);

    return <>
        {props.state !== null ? <Profile  profile={props.state} status={props.status} updateStatus={props.updateStatus}/> : <Loader/>}
    </>
}

let mapStateToProps = (state) => ({state: state.dataProfile.profile, status: state.dataProfile.status})

export default compose(
    connect(mapStateToProps, {setUserData, getStatus, updateStatus}),
    WithAuthRedirect
)(ProfileContainer)