import React from "react";
import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "./../../../Utils/validator";
import Textarea from "../../../Ui/Textarea/Textarea";

const maxLengthCreator30 = maxLengthCreator(30)

function MyPosts(props) {
    const onSubmitPost = (data) => props.addPost(data.post)


    return (
        <div>
            <div className={s.title}> my posts</div>
            <PostReduxForm {...props} onSubmit={onSubmitPost}/>
            <div className={s.subtitle}>new post</div>
            <div className={s.items}>
                {props.state.post.map((el, idx) => <Post key={idx} id={el.id} text={el.text} like={el.countLike}/>)}
            </div>
        </div>
    );
}
const FormPostAdd = (props) => {

    // c


    // const required = value => (value   ? undefined : 'Required')
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>
            <Field component={Textarea}
                   name='post'
                   validate={[required, maxLengthCreator30 ]}
                   placeholder="Text new post..."
                   className={s.form__control}/>
            <div className={s.form__btn}>
                {/*<Button onClick={addPost} value="add"/>*/}
                <button className="btn">add</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(FormPostAdd)

export default MyPosts;
