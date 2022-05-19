import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapPostToProps = (state) => ({state: state.dataProfile})

let dispatchPostToProps = (dispatch) => {
    return (
        {

            addPost: (post) => dispatch(addPostActionCreator(post))
        }

    )
}
const MyPostsContainer = connect(mapPostToProps, dispatchPostToProps)(MyPosts)

export default MyPostsContainer;
