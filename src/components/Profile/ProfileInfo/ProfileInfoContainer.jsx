/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";
import {getUserThunkCreator, saveData, updatePhoto, updateStatus} from "../../../redax/profile-reducer.ts";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileInfoContainer extends React.Component {
    componentDidMount() {
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
                         statusAc={this.props.status} updatePhoto={this.props.updatePhoto}
                         saveData={this.props.saveData}/>
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
    connect(mapStateToProps, {
        getUser: getUserThunkCreator,
        updateStatus,
        updatePhoto,
        saveData
    }), withRouter, withAuthRedirect)
(ProfileInfoContainer);
