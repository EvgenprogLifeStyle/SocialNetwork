import React from "react";
import s from "./Post.module.scss";
import Button from "../../../../Ui/Button/Button";
const Post = ({ text, like }) =>

        <div className={s.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="" />
            <div className={s.name}>{text} </div>
            <div className={s.like}>
                <div style={{ marginRight: 10 }}>{like} </div>
                 <Button value="Like"/>
            </div>
        </div>



export default Post;
