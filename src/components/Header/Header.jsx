import React from "react";
import logo from "./../../logo.svg";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className={s.header}>
            <div className={s.header__contain}>
                <img src={logo} alt=""/>
                {props.isAuth === true
                    ? <div className={s.header__login}>{props.login}</div>
                    : <NavLink to={'/login'} className={s.header__login}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
