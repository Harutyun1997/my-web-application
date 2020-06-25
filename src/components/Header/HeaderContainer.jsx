import React from 'react';
import './header.css';
import Header from './Header';
import {getAuthUserData, signOutAccount} from "../../redax/auth-reducer.ts";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props}/>

        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.name,
});

export default connect(mapStateToProps, {getAuthUserData, signOutAccount})(HeaderContainer);