import React from 'react';
import Login from './Login';
import {
    getAuthUserData, sigInAccount, signOutAccount, updateEmailText,
    updatePasswordText
} from "../../redax/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class LoginContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        if (this.props.isAuth) return <Redirect to={'/profile'}/>;
        return (
            <Login {...this.props}/>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.name,
    email: state.auth.email,
    error: state.auth.error,
    password: state.auth.password
});

export default connect(mapStateToProps, {
    getAuthUserData,
    updateEmailText,
    updatePasswordText,
    sigInAccount,
    signOutAccount
})(LoginContainer);