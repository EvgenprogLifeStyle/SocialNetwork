import React from 'react';
import s from './Users.module.scss'
import defaultAvatar from './../../assets/img/avatar_default.jpg'
import {Link, NavLink} from "react-router-dom";
import axios from "axios";
import {toggleInProgress} from "../../Redux/UsersReducer";

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
                                ? <button disabled={props.inProgress} onClick={() => {
                                    console.log(props.inProgress)
                                    props.toggleInProgress(true)
                                    return axios
                                        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": '49bc418b-fd7c-4c82-b5f5-ce56b5a10082'
                                                }
                                            })
                                        .then(response => {
                                            if (response.data.resultCode === 0) props.followAC(user.id)
                                            props.toggleInProgress(false)
                                        })

                                }
                                }
                                          className="btn btn__full">unfollowed</button>
                                : <button disabled={props.inProgress} onClick={() => {
                                    props.toggleInProgress(true)
                                    return axios
                                        .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": '49bc418b-fd7c-4c82-b5f5-ce56b5a10082'
                                            }
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) props.unFollowAC(user.id)
                                            props.toggleInProgress(false)
                                        })
                                }
                                }
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