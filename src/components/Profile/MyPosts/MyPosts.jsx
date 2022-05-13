import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";


function MyPosts(props) {

    let newPost = props.state.newPost

    const sendMessage = () => {
        props.addPost()
    }
    const messageChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }


    return (
        <div>
            <div className={s.title}> my posts</div>
            <div className={s.form}>
                <textarea
                    onChange={messageChange}
                    value={newPost}
                    placeholder="Text new post..."
                    className={s.form__control}/>
                <div className={s.form__btn}>
                    {/*<Button onClick={addPost} value="add"/>*/}
                    <button onClick={sendMessage} className="btn">add</button>
                </div>
            </div>
            <div className={s.subtitle}>new post</div>
            <div className={s.items}>
                {props.state.post.map((el, idx) => <Post key={idx} id={el.id} text={el.text} like={el.countLike}/>)}
            </div>
        </div>
    );
}

export default MyPosts;
