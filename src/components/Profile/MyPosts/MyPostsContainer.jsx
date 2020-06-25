/* eslint-disable no-unused-vars */
import React from 'react';
import {addPostActionCreator} from "../../../redax/profile-reducer.ts";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        myName: state.auth.name
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message, mame) => {
            dispatch(addPostActionCreator(message, mame));
        },
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;