import React from "react";
import logo from "../../assets/img/logo.svg";
import s from "./Header.module.scss";
import {NavLink} from "react-router-dom";

function Header(props) {
    // console.log(props)
    return (
        <header className={s.header}>
            <div className={s.header__contain}>
                <img src={logo} alt="logo"/>
                {props.isAuth === true
                    ?
                    <div className={s.login}>
                        <div className={s.login__name}>{props.login}</div>
                        <div className={s.login__exit}>
                            <button onClick={props.logout}>Log out</button>
                        </div>
                    </div>
                    : <NavLink to={'/login'} className={s.header__login}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;
