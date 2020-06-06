/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {getUserThunkCreator, updateStatus} from "../../../redax/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileInfoContainer extends React.Component {
    componentDidMount() {
        // this.props.toggleIsFetching(true);
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = this.props.user.id;
            if (!userID) {
                this.props.history.push('/login');
            }
        }
        this.props.getUser(userID);
    }


    render() {
        return (
            <ProfileInfo {...this.props.userPage} authMe={this.props.user} updateStatus={this.props.updateStatus}
                         statusAc={this.props.status}/>
        )

    }
}


let mapStateToProps = (state) => {
    return {
        userPage: state.profilePage.userData,
        user: state.auth,
        status: state.profilePage.userData.status,
    }
};
export default compose(
    connect(mapStateToProps, {getUser: getUserThunkCreator, updateStatus}), withRouter, withAuthRedirect)
(ProfileInfoContainer);
