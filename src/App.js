import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Link, withRouter, Switch, Redirect} from "react-router-dom";
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginContainer from "./components/Login/LoginContainer";
import SignUpContainer from "./components/SignUp/SigUpContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeAPP} from "./redax/app-reducer.ts";
import Preloader from "./components/common/Preloader/Preloader";

import {BrowserRouter} from 'react-router-dom';
import store from "./redax/redux-store.ts";
import Profile from './components/Profile/Profile';
import {SuspenseLazyLoading} from "./hoc/withSuspenseLazyLoading";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.tsx'));

//проверка если есть зайди акаут еслт нет строница  логина
class App extends React.Component {

    componentDidMount() {
        this.props.initializeAPP();
        window.addEventListener('unhandledrejection', (promiseRejection) => this.catchAllUnnphandledErrors(promiseRejection));
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={'App'}>
                {!this.props.isAuth &&
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
                }
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    {this.props.isAuth &&
                    <NavBar/>
                    }

                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/profile/:userId?' render={() => <Profile/>}/>
                            <Route path='/dialog'
                                   render={SuspenseLazyLoading(DialogsContainer)}/>
                            <Route path='/users'
                                   render={SuspenseLazyLoading(UsersContainer)}/>
                            <Route path='/login' render={SuspenseLazyLoading(LoginContainer)}/>
                            <Route path="/sign-up" render={SuspenseLazyLoading(SignUpContainer)}/>
                            <Route path="*" render={() => <div> 404 Not Found</div>}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    initialized: state.app.initialized,
});

let AppContainer = compose(withRouter, connect(mapStateToProps, {initializeAPP}))(App);

const MainApp = (props) => (
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>;
        </Provider>
    </BrowserRouter>);

export default MainApp;