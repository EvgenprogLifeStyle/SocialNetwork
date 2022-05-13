import React from 'react';
import s from './DialogItem.module.scss'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = props.link + '/' + props.id
    return (<NavLink to={path} className={`${s.item} ${s.active}`}>{props.name}</NavLink>)
}

export default DialogItem;