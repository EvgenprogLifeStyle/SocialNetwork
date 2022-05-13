import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "../../../Ui/Button/Button";

import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/ProfileReducer";
import {useDispatch, useSelector} from "react-redux";


function MyPosts(props) {

    const dispatch = useDispatch()
    let state = useSelector(state => state.dataProfile)


    let newPostChange = state.newPost

    let onNewPostChange = (e) => {
        let text = e.target.value
        dispatch(updatePostActionCreator(text))
    }

    let sendNewPostClick = () => {
        dispatch(addPostActionCreator())
    }

    return (
        <div>
            <div className={s.title}> my posts</div>
            <div className={s.form}>
                <textarea
                    onChange={onNewPostChange}
                    value={newPostChange}
                    placeholder="Text new post..."
                    className={s.form__control}/>
                <div className={s.form__btn}>
                    {/*<Button onClick={addPost} value="add"/>*/}
                    <button onClick={sendNewPostClick}>add</button>
                </div>
            </div>
            <div className={s.subtitle}>new post</div>
            <div className={s.items}>
                {state.post.map((el, idx) => <Post key={idx} id={el.id} text={el.text} like={el.countLike}/>)}
            </div>
        </div>
    );
}

export default MyPosts;
