import React from "react";
import s from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) {
    return (
        <div className={s.main}>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner}
                         savePhoto={savePhoto} saveProfile={saveProfile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default React.memo(Profile);
