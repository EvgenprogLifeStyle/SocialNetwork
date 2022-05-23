import React, {useState} from "react";
import s from './ProfileInfo.module.scss'
import defaultAvatar from './../../../assets/img/avatar_default.png'
import Status from "./Status/Status";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import {reduxForm} from "redux-form";
import {saveProfile} from "../../../Redux/ProfileReducer";

function ProfileInfo({status, updateStatus, profile, isOwner, savePhoto, saveProfile}) {
    // console.log(profile)

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelector = (e) => e.target.files.length > 0 ? savePhoto(e.target.files[0]) : 'none'

    const editProfile = () => setEditMode(true)


    const onSubmit =  (data) => {
        // console.log(data)
         saveProfile(data).then(() => setEditMode(false))
        // setEditMode(false)
    }

    const EditProfileReduxForm = reduxForm({form: 'profile'})(ProfileDataForm)


    return (
        <div>
            <div className={s.profile}>
                <div className={s.profile__left}>
                    <div className={s.profile__img}>
                        {profile.photos.large
                            ? <img src={profile.photos.large} alt={profile.fullName}/>
                            : <img src={defaultAvatar}/>
                        }
                    </div>
                    <input type={'file'} onChange={onMainPhotoSelector}/>
                </div>
                <div className={s.profile__right}>

                    <Status className={s.profile__status} text={status} updateStatus={updateStatus}/>
                    {editMode ? <EditProfileReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :
                        <ProfileBlock profile={profile} editProfile={editProfile}/>}


                </div>
            </div>
        </div>
    )
}

const ProfileBlock = ({profile, editProfile}) => {
    return <>
        <button onClick={editProfile}> Edit data</button>
        <div className={s.profile__name}>{profile.fullName}</div>
        <div>
            <b>Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJobDescription &&
            <div><b>My professional skills: </b> {profile.lookingForAJobDescription}</div>
        }

        {profile.aboutMe &&
            <div className={s.profile__about}><b>About me: </b> {profile.aboutMe}</div>
        }

        <div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map(key =>

                profile.contacts[key] &&
                <Contact key={key} title={key} value={profile.contacts[key]}/>
            )}
        </div>
    </>
}


export const Contact = ({title, value}) => {
    return <div><b>{title}:</b>{value}</div>
}
export default ProfileInfo;
