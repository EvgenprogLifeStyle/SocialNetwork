import React,{Suspense} from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav/Nav";
// import DialogsContainer from "./components/Dialogs/DialogsCotainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Loader from "./components/Loader/Loader";

const HeaderContainer = React.lazy(() => import('./components/Header/HeaderContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsCotainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

const App = () => {

    return (
        <Router>
            <Suspense fallback={<Loader/>}>
            <div className="App">
                <HeaderContainer/>
                <Nav/>
                <div className="content">
                    <Routes basename={process.env.PUBLIC_URL}>
                        <Route activeClassName='active' path='/profile' element={<ProfileContainer/>}/>
                        <Route activeClassName='active' path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route activeClassName='active' path='/dialogs' element={<DialogsContainer/>}/>
                        <Route activeClassName='active' path='/users' element={<UsersContainer/>}/>
                        <Route activeClassName='active' path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
            </Suspense>
        </Router>
    );
};

export default App;
