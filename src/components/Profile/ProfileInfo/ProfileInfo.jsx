import React from "react";
import s from './ProfileInfo.module.scss'
import defaultAvatar from './../../../assets/img/avatar_default.png'
import Status from "./Status/Status";

function ProfileInfo({status, updateStatus, profile}) {
    return (
        <div>
            <div className={s.profile}>
                <div className={s.profile__left}>
                    <div className={s.profile__img}>
                        {profile.photos.large
                            ? <img src={profile.photos.large} alt={profile.fullName}/>
                            : <img
                                src={defaultAvatar}/>
                        }
                    </div>
                    {/*<div className={s.profile__btn}>un</div>*/}
                </div>
                <div className={s.profile__right}>
                    <div className={s.profile__name}>{profile.fullName}</div>
                    <Status className={s.profile__status} text={status} updateStatus={updateStatus}/>
                    {/*<div className={s.profile__status}>{profile.aboutMe}</div>*/}
                    <div className={s.profile__about}>{profile.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
