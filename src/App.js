import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import Footer from './components/Footer/Footer';
import {Route} from 'react-router-dom';


const App = (props) => {
    debugger;
    props = props.appState;
    let profileData = () => <Profile data={props.profilePage}/>;
    let dialogs = () => <Dialogs data={props.messagesPage}/>
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile' component={profileData}/>
                <Route path='/dialog' render={dialogs}/>
            </div>
            <Footer/>
        </div>
    )
};

export default App;
