import React from "react";
import logo from "./../../logo.svg";
import s from "./Header.module.scss";

function Header() {
    return (
        <header className={s.header}>
            <div className={s.header__contain}>
                <img src={logo} alt=""/></div>
        </header>
    );
}

export default Header;
