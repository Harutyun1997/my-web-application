/* eslint-disable no-unused-vars */
import React from 'react';
import {createMessageActionCreator} from "../../redax/messages-reducer";
import {connect} from "react-redux";
import Dialog from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
        messageData: state.messagesPage.messageData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(createMessageActionCreator(message));
        },
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialog);