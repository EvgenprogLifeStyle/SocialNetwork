import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers, toggleInProgress,
    toggleIsFetching,
    unFollow
} from "../../Redux/UsersReducer";

import Users from "./Users";
import Loader from "../Loader/Loader";
import {getUsersApi} from "../../Api/api";



function UsersContainerApi(props) {

    function getUsers() {

        if (props.state.length === 0) {
            props.toggleIsFetching(true)
            getUsersApi(props.currentPage, props.pageSize)
                .then(data => {
                    props.setTotalUserCount(data.totalCount)
                    props.setUsers(data.items)
                    props.toggleIsFetching(false)
                })

        }
    }

    getUsers()

    const onPageChange = (el) => {
        props.setCurrentPage(el)
        props.toggleIsFetching(true)
        getUsersApi(el, props.pageSize)
            .then(data => {
                props.setUsers(data.items)
                props.toggleIsFetching(false)
            })
    }
    return <>

        {props.isFetching ? <Loader/> : null}
        <Users totalUserCount={props.totalUserCount}
               pageSize={props.pageSize}
               onPageChange={onPageChange}
               state={props.state}
               followAC={props.follow}
               unFollowAC={props.unFollow}
               currentPage={props.currentPage}
               toggleInProgress={props.toggleInProgress}
               inProgress={props.inProgress}
        />
    </>;
}


let mapStateToProps = (state) => {
    // console.log(state.dataUsers)
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


const UsersContainer = connect(mapStateToProps, {
    // followAC: (id) => dispatch(followAC(id)),
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    toggleIsFetching,
    toggleInProgress
})(UsersContainerApi)
export default UsersContainer;