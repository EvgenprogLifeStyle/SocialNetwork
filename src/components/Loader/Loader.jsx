import React from 'react';
import loaderImg from "../../assets/img/loader_01.svg";

function Loader(props) {
    return (
        <div className="loader" ><img src={loaderImg} alt="Loading..."/></div>
    );
}

export default Loader;