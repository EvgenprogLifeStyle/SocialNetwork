import React, {useEffect} from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, toggleIsFetching} from "../../Redux/UsersReducer";
import Loader from "../Loader/Loader";
import {useParams} from "react-router-dom";

function ProfileContainer(props) {
    const params = useParams();
    if (!params.userId) params.userId = 2

    useEffect(() => {
        props.toggleIsFetching(true)


        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${params.userId}`)
            .then(response => {
                props.setUserProfile(response.data)
                props.toggleIsFetching(false)
            })
    }, []);

    return <>

        {props.state !== null ? <Profile {...props} profile={props.state}/> : <Loader/>}
    </>
}

let mapStateToProps = (state) => {
    return (
        {
            state: state.dataUsers.profile,
        }
    )
}


export default connect(mapStateToProps, {setUserProfile, toggleIsFetching})(ProfileContainer);