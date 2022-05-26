import React, {useEffect, useState} from "react";
import s from './ProfileInfo.module.scss'
import styleEF from './ProfileDataForm/ProfileDataForm.module.scss'
import defaultAvatar from './../../../assets/img/avatar_default.png'
import Status from "./Status/Status";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {reduxForm} from "redux-form";

function ProfileInfo({status, updateStatus, profile, isOwner, savePhoto, saveProfile}) {

    const [editMode, setEditMode] = useState(false)
    const [loadingImg, setLoadingImg] = useState(false)

    const onMainPhotoSelector = (e) => {
        if (e.target.files.length > 0) {
            setLoadingImg(true)
            savePhoto(e.target.files[0])
        }
    }

    useEffect(() => {
        setLoadingImg(false)
    }, [profile.photos])

    const editProfile = () => setEditMode(true)
    const onSubmit = (data) => {
        saveProfile(data).then(() => setEditMode(false))
    }
    const EditProfileReduxForm = reduxForm({form: 'profile'})(ProfileDataForm)

    console.log(isOwner)
    return (
        <div>
            <div className={s.profile}>
                <div className={s.left}>
                    <div className={s.left__img}>
                        {profile.photos.large
                            ? <img src={profile.photos.large} alt={profile.fullName}/>
                            : <img src={defaultAvatar}/>
                        }
                    </div>
                    {!isOwner &&
                        <div className={s.left__file}>
                            <input id="left__file" type={'file'} onChange={onMainPhotoSelector}/>
                            <label htmlFor="left__file" className="btn btn__full">
                                {loadingImg
                                    ? "download..."
                                    : "Update avatar"}
                            </label>
                        </div>
                    }
                    {!editMode && !isOwner && <button className={`btn btn__full ${s.btn__edit}`} onClick={editProfile}> Edit data</button>}

                    </div>
                <div className={s.profile__right}>
                    <div className={s.profile__name}>{profile.fullName}</div>
                    <Status className={s.profile__status} text={status} updateStatus={updateStatus}/>
                    {editMode ?
                        <EditProfileReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                        <ProfileBlock profile={profile}/>}
                </div>
            </div>
        </div>
    )
}

const ProfileBlock = ({profile, editProfile}) => {
    return <>


        <div className={styleEF.form__control}>
            <div>Looking for a job: </div> <div>{profile.lookingForAJob ? 'yes' : 'no'}</div>
        </div>
        {profile.lookingForAJobDescription &&
            <div className={styleEF.form__control}><div>My professional skills: </div> <div>{profile.lookingForAJobDescription}</div></div>
        }
        {profile.aboutMe &&
            <div className={styleEF.form__control}><div>About me: </div> <div>{profile.aboutMe}</div></div>
        }
        <div>
            <div>Contacts:</div>
            {Object.keys(profile.contacts).map(key =>
                profile.contacts[key] &&
                <Contact key={key} title={key} value={profile.contacts[key]}/>
            )}
        </div>
    </>
}

export const Contact = ({title, value}) => {
    return <div className={styleEF.form__control}><div>{title}:</div><div>{value}</div></div>
}

export default ProfileInfo;
