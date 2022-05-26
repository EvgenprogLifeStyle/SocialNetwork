import React from 'react';
import loaderImg from "../../../assets/img/loader_02.svg";

function Loader() {
    return (
        <div className="loader" ><img src={loaderImg} alt="Loading..."/></div>
    );
}

export default Loader;