import React, {Suspense, useEffect} from "react";
import "./App.scss";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Loader from "./components/Common/Loader/Loader";
import {connect} from "react-redux";
import {setLogin} from "./Redux/AuthReducer";
import {compose} from "redux";

import Login from "./components/Login/Login";
import ProfileContainer from "./components/Profile/ProfileContainer";

const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'));
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsCotainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
// const Login = React.lazy(() => import('./components/Login/Login'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<Loader/>}>
                <HeaderContainer/>
                <div className="App">
                    <Nav className="navbar"/>
                    <div className="content">
                        <Routes basename={process.env.PUBLIC_URL}>

                            <Route activeClassName='active' path='/' exact element={<Navigate replace to="/profile"/>}/>
                            <Route activeClassName='active' path='/profile' element={<ProfileContainer/>}/>
                            <Route activeClassName='active' path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route activeClassName='active' path='/dialogs' element={<DialogsContainer/>}/>
                            <Route activeClassName='active' path='/users' element={<UsersContainer/>}/>
                            <Route activeClassName='active' path='/login' exact element={<Login/>}/>
                            <Route activeClassName='active' path='*' element={<div>404 not found</div>}/>

                        </Routes>

                    </div>
                </div>
            </Suspense>
        </Router>
    );
};

export const ContainerApp = (props) => {
    useEffect(() => {
        props.setLogin()
    }, []);

    return <App {...props}/>
}

export default compose(
    connect(null, {setLogin})
)(ContainerApp);
