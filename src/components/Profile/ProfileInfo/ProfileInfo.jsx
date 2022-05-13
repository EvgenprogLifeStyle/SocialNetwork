import React from "react";
import s from './ProfileInfo.module.scss'

function ProfileInfo(props) {
    let item = props.profile

    return (
        <div>
            <div className={s.profile}>
                <div className={s.profile__left}>
                    <div className={s.profile__img}>
                        {item.photos.large
                            ? <img src={item.photos.large} alt=""/>
                            : <img
                                src="https://cdn0.iconfinder.com/data/icons/e-commerce-135/48/74_user-avatar-profile-personal-account-512.png"/>
                        }
                    </div>
                    {/*<div className={s.profile__btn}>un</div>*/}
                </div>
                <div className={s.profile__right}>
                    <div className={s.profile__name}>{item.fullName}</div>
                    <div className={s.profile__status}>{item.aboutMe}</div>
                    <div className={s.profile__about}>{item.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
