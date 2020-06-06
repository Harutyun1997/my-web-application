/* eslint-disable no-unused-vars */
import React from 'react';
import {addPostActionCreator} from "../../../redax/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addPostActionCreator(message));
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;