import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/ProfileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";


// function MyPostsContainer() {
//     const dispatch = useDispatch()
//     const state = useSelector(state => state.dataProfile)
//
//     let newPostChange = state.newPost
//
//     let updateNewPostText = (e) => {
//         let text = e.target.value
//         dispatch(updatePostActionCreator(text))
//     }
//
//     let addPost = () => dispatch(addPostActionCreator())
//
//     return (
//         <MyPosts
//             updateNewPostText={updateNewPostText}
//             addPost={addPost}
//             state={state}
//             newPostChange={newPostChange}/>
//     )
// }

let mapPostToProps = (state) => ({state: state.dataProfile})
let dispatchPostToProps = (dispatch) => {
    return (
        {
            updateNewPostText: (text) => dispatch(updatePostActionCreator(text)),
            addPost: () => dispatch(addPostActionCreator())
        }

    )
}
const MyPostsContainer = connect(mapPostToProps,dispatchPostToProps)(MyPosts)

export default MyPostsContainer;
