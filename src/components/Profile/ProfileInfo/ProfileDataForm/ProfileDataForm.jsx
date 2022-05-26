import React from 'react';
import s from "./ProfileDataForm.module.scss";
import {Field} from "redux-form";
import Input from "../../../../Ui/Input/Input";

const ProfileDataForm = ({profile, handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div className={s.form__top}>    <button className='btn'> save</button></div>


            {error && <div>{error}</div>}
            <div className={s.form__control}>
                <div>Full name:</div>
                <Field component={Input} type="text" name='fullName'/>
            </div>
            <div className={s.form__control}>
                <div>Looking for a job:</div>
                <Field component="input" type="checkbox" name='lookingForAJob'/>
            </div>
            <div className={s.form__control}>
                <div>My professional skills:</div>
                <Field component={Input} type="text" name='lookingForAJobDescription'/>
            </div>
            <div className={s.form__control}>
                <div>About me:</div>
                <Field component={Input} type="text" name='aboutMe'/>
            </div>
            <div className={s.contact__control}>
                <div>Contacts:</div>
                {Object.keys(profile.contacts).map(key =>
                    <div className={s.form__control} key={key}>
                        <div>{key}:</div>
                        <Field component={Input} type="text" name={'contacts.' + key} placeholder={key}/></div>
                )}
            </div>
        </form>
    );
};

export default ProfileDataForm;