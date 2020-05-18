/* eslint-disable no-unused-vars */
import React from 'react';
import {connect} from "react-redux";
import ProfileInfo from "./ProfileInfo";

let mapStateToProps = (state) => {
    debugger;
    return {
        data: state.profilePage.userData,
    }
};
const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);
export default ProfileInfoContainer;
