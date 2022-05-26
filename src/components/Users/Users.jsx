import React from 'react';
import s from './Users.module.scss'
import Pagination from "../Common/Paginaton/Pagination";
import User from "./User";

function Users(props) {
    return <div className={s.users}>


        <div className={s.users__container}>
            {props.state.map(user =>
                <User key={user.id}
                      user={user}
                      inProgress={props.inProgress}
                      setUnFollow={props.setUnFollow}
                      setFollow={props.setFollow}/>
            )}
        </div>
        <Pagination
            onPageChange={props.onPageChange}
            currentPage={props.currentPage}
            pageSize={props.pageSize}
            totalItemsCount={props.totalUserCount}
            portionSize={10}/>
    </div>
}

export default Users;