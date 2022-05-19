import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Navigate} from "react-router-dom";
import {updateStatus} from "../../Redux/ProfileReducer";


function Profile(props) {
    // console.log(props)
    return (
        <div className={s.main}>
            <ProfileInfo profile={props.profile}  status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
