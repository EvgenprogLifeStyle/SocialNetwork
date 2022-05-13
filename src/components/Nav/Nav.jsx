import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Nav.module.scss";

function Nav() {

    return (
        <nav className={s.nav}>

            <div className={s.item}>
                <NavLink className={(navData) => (navData.isActive ? s.activeL : 'none')} to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => (navData.isActive ? s.activeL : 'none')}
                         to="/dialogs">Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => (navData.isActive ? s.activeL : 'none')}
                         to="/users">Users</NavLink>
            </div>
        </nav>
    );
}

export default Nav;