import React from "react";
import {addPost} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapPostToProps = (state) => ({state: state.dataProfile})

export default connect(mapPostToProps, {addPost})(MyPosts);
