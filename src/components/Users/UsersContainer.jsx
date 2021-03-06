import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, setFollow, setUnFollow} from "../../Redux/UsersReducer";

import Users from "./Users";
import Loader from "../Common/Loader/Loader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";


function UsersContainerApi(props) {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [props.currentPage, props.pageSize]);

    const onPageChange = (el) => {
        props.setCurrentPage(el)
        props.getUsers(el, props.pageSize)
    }
    return <>
        {props.isFetching ? <Loader/> : null}

        <Users totalUserCount={props.totalUserCount}
               pageSize={props.pageSize}
               onPageChange={onPageChange}
               state={props.state}
               followAC={props.follow}
               currentPage={props.currentPage}
               inProgress={props.inProgress}
               setUnFollow={props.setUnFollow}
               setFollow={props.setFollow}
        />
    </>;
}

let mapStateToProps = (state) => {
    return (
        {
            state: state.dataUsers.users,
            pageSize: state.dataUsers.pageSize,
            totalUserCount: state.dataUsers.totalUserCount,
            currentPage: state.dataUsers.currentPage,
            isFetching: state.dataUsers.isFetching,
            inProgress: state.dataUsers.inProgress
        }
    )
}

export default compose(
    connect(mapStateToProps, {
        follow,
        setCurrentPage,
        getUsers,
        setUnFollow,
        setFollow
    }),
    WithAuthRedirect
)(UsersContainerApi)
