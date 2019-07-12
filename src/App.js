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
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile'
                       render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                <Route path='/dialog'
                       render={() => <Dialogs store={props.store} messagesPage={props.state.messagesPage}/>}/>
            </div>
            <Footer/>
        </div>
    )
};

export default App;
