import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({profile, status, updateStatus}) {
    return (
        <div className={s.main}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
