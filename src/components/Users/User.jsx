import React from 'react';
import s from "./Users.module.scss";
import {Link} from "react-router-dom";
import defaultAvatar from "../../assets/img/avatar_default.png";

const User = ({user, inProgress, setUnFollow, setFollow}) => {
    return (
        <div className={s.users__item}>
            <div className={s.users__img}>
                <Link to={'/profile/' + user.id}>
                    <img src={user.photos.large !== null ? user.photos.large : defaultAvatar}
                         alt={user.fullName}/>
                </Link></div>
            <div className={s.users__body}>
                <div className={s.users__name}>{user.name}</div>
                {/*<div className={s.users__status}>{user.status}</div>*/}
                {/*<div className={s.users__location}>{user.location.country},{user.location.city}</div>*/}
                {user.followed === true
                    ? <button disabled={inProgress} onClick={() => setUnFollow(user.id)}
                              className="btn btn__full">unfollowed</button>
                    : <button disabled={inProgress} onClick={() => setFollow(user.id)}
                              className="btn btn__full">followed</button>
                }
            </div>
        </div>
    );
};

export default User;