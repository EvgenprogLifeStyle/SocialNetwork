import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, savePhoto, saveProfile, setUserData, updateStatus} from "../../Redux/ProfileReducer";
import Loader from "../Common/Loader/Loader";
import {useParams} from "react-router-dom";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

function ProfileContainer(props) {
    const params = useParams();
let isOwner
    if (!params.userId) params.userId = props.userId

    useEffect(() => {
        props.setUserData(params.userId)
        props.getStatus(params.userId)
    }, [params.userId]);
    if(+params.userId != props.userId) isOwner=true
    console.log(isOwner)
    return <>
        {props.state !== null
            ? <Profile
                isOwner={isOwner}
                profile={props.state}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}/>
            : <Loader/>}
    </>
}

let mapStateToProps = (state) => ({
    state: state.dataProfile.profile,
    status: state.dataProfile.status,
    userId: state.auth.id
})

export default compose(
    connect(mapStateToProps, {setUserData, getStatus, updateStatus, savePhoto, saveProfile}),
    WithAuthRedirect
)(React.memo(ProfileContainer))