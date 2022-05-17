import React from 'react';
import s from './Users.module.scss'
import defaultAvatar from './../../assets/img/avatar_default.png'
import {Link} from "react-router-dom";

function Users(props) {


    let count, pages
    count = Math.ceil(props.totalUserCount / props.pageSize)
    pages = []
    for (let i = 1; i <= count; i++) {
        pages.push(i)
    }


    return (
        <div>
            <div className={s.pagination}>
                {pages.map(el =>
                    <span key={el} onClick={() => props.onPageChange(el)}
                          className={props.currentPage === el ? s.active_page : ''}>
                        {el}
                    </span>
                )}
            </div>
            <div className={s.users__container}>
                {props.state.map(user => <div key={user.id} className={s.users__item}>
                        <div className={s.users__img}>
                            <Link to={'/profile/' + user.id}>
                                <img src={user.photos.large !== null ? user.photos.large : defaultAvatar}
                                     alt={user.fullName}/>
                            </Link></div>
                        <div className={s.users__body}>
                            <div className={s.users__name}>{user.name}</div>
                            <div className={s.users__status}>{user.status}</div>
                            {/*<div className={s.users__location}>{user.location.country},{user.location.city}</div>*/}
                            {user.followed === true
                                ? <button disabled={props.inProgress} onClick={() => props.setUnFollow(user.id)}
                                          className="btn btn__full">unfollowed</button>
                                : <button disabled={props.inProgress} onClick={() => props.setFollow(user.id)}
                                          className="btn btn__full">followed</button>
                            }
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Users;