/* eslint-disable no-unused-vars */
import React from 'react';
import {createMessageActionCreator, updateMessageActionCreator} from "../../redax/messages-reducer";
import Dialog from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     const addMessage = () => {
//         let action = createMessageActionCreator();
//         props.dispatch(action);
//     };
//     const updateTextContent = (message) => {
//         let action = updateMessageActionCreator(message);
//         props.dispatch(action);
//     };
//     return ( <Dialog data={props.data} addMessage={addMessage} updateTextContent={updateTextContent}/>);
//
// };

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messageData: state.messagesPage.messageData,
        newMessageText: state.messagesPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextContent: (message) => {
            dispatch(updateMessageActionCreator(message));
        },
        addMessage: () => {
            dispatch(createMessageActionCreator());
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);
export default DialogsContainer;