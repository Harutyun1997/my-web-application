import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import SignUp from "./SigUp";
import {sigUpAccount} from "../../redax/auth-reducer.ts";

class SignUpContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getAuthUserData();
    // }
    render() {
        if (this.props.isAuth) return <Redirect to={'/profile'}/>;
        return (
            <SignUp {...this.props}/>
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {
    sigUpAccount
})(SignUpContainer);