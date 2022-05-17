import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserData} from "../../Redux/UsersReducer";
import Loader from "../Loader/Loader";
import {Navigate, useParams} from "react-router-dom";

function ProfileContainer(props) {
    const params = useParams();
    if (!params.userId) params.userId = 23962

    useEffect(() => props.setUserData(params.userId), []);
    if(!props.isAuth) return <Navigate replace to="/login" />
    return <>
        {props.state !== null ? <Profile {...props} profile={props.state}/> : <Loader/>}
    </>
}

let mapStateToProps = (state) => {
    return (
        {
            state: state.dataUsers.profile,
            isAuth: state.auth.isAuth
        }
    )
}


export default connect(mapStateToProps, {setUserData})(ProfileContainer);