import React from "react";
import "./App.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/Nav/Nav";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {

    return (
        <Router>
            <div className="App">
                <Header/>
                <Nav/>
                <div className="content">
                    <Routes>
                        <Route activeClassName='active' path='/' element={<Profile/>}/>
                        <Route activeClassName='active' path='/dialogs'  element={ <Dialogs/>} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
