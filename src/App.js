import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsCotainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {

    return (
        <Router>
            <div className="App">
                <HeaderContainer/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route  activeClassName='active' path='/profile' element={<ProfileContainer />} />
                        <Route activeClassName='active' path='/profile/:userId' element={<ProfileContainer/>}/>
                        <Route activeClassName='active' path='/dialogs' element={<DialogsContainer/>}/>
                        <Route activeClassName='active' path='/users' element={<UsersContainer/>}/>
                        <Route activeClassName='active' path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
            </Router>
    );
};

export default App;
