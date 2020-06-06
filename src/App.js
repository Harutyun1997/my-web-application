import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import LoginContainer from "./components/Login/LoginContainer";
import SignUpContainer from "./components/SignUp/SigUpContainer";
import {getAuthUserData} from "./redax/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAPP} from "./redax/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


//проверка если есть зайди акаут еслт нет строница  логина
class App extends React.Component {

    componentDidMount() {
        this.props.initializeAPP();
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            !this.props.isAuth ?
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/login"}>Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="auth-wrapper">
                        <div className="auth-inner">
                            <Switch>
                                <Route exact path='/' component={LoginContainer}/>
                                <Route path="/login" render={() => <LoginContainer/>}/>
                                <Route path="/sign-up" render={() => <SignUpContainer/>}/>
                                <Route path='/profile/:userId?' render={() => <Profile/>}/>
                                <Route path='/dialog' render={() => <DialogsContainer/>}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                            </Switch>
                        </div>
                    </div>
                </div>
                :
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?' render={() => <Profile/>}/>
                        <Route path='/dialog' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <LoginContainer/>}/>
                        <Route path="/sign-up" render={() => <SignUpContainer/>}/>
                    </div>
                    <Footer/>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
});

export default compose(withRouter, connect(mapStateToProps, {initializeAPP}))(App);
