import React from "react";
import s from "./Profile.module.scss";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {

    return (
        <div className={s.main}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
