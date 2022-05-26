import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.scss";
import iconProfile from './../../assets/img/profile.svg'
import iconDialogs from './../../assets/img/dialogs.svg'
import iconUsers from './../../assets/img/users.svg'
import iconMusic from './../../assets/img/music.svg'
import iconNews from './../../assets/img/news.svg'
function Nav() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={(navData) => (navData.isActive ? s.activeL : 'none')}
                         to="/profile"><span><img src={iconProfile} alt="iconProfile"/></span> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => (navData.isActive ? s.activeL : 'none')}
                         to="/dialogs"><span><img src={iconDialogs} alt="iconDialogs"/></span> Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => (navData.isActive ? s.activeL : 'none')}
                         to="/users"><span><img src={iconUsers} alt="iconUsers"/></span> Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => (navData.isActive ? s.activeL : 'none')}
                         to="/users"><span><img src={iconMusic} alt="iconMusic"/></span> Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => (navData.isActive ? s.activeL : 'none')}
                         to="/users"><span><img src={iconNews} alt="iconNews"/></span> News</NavLink>
            </div>
        </nav>
    );
}

export default Nav;
