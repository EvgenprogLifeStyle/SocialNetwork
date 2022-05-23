import React from 'react';
import s from "../ProfileInfo.module.scss";
import {Field} from "redux-form";
import Input from "../../../../Ui/Input/Input";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    // console.log(profile)
    // console.log(error)

    return (
        <form onSubmit={handleSubmit}>
            <button> save</button>
            {error && <div>{error}</div>}
            <div className={s.profile__name}><b>Full name:</b>
                <Field component={Input} type="text" name='fullName'
                /></div>
            <div>
                <b>Looking for a job: </b>
                <Field component="input" type="checkbox" name='lookingForAJob'
                />
            </div>

            <div><b>My professional skills: </b>
                <Field component={Input} type="text" name='lookingForAJobDescription'
                />
            </div>

            <div className={s.profile__about}><b>About me: </b>
                <Field component={Input} type="text" name='aboutMe'/>
            </div>

            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key =>
                    <div key={key}><b>{key}:</b>
                        <Field component={Input}  type="text" name={'contacts.' + key} placeholder={key}/></div>)}
            </div>
        </form>
    );
};


export default ProfileDataForm;