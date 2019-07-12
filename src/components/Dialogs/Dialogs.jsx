import React from 'react';
import s from './Dialogs.module.css'
import '../../App.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {addMessage} from "../../redax/state";

let newMessage = React.createRef();

const createMessage = (propers) => {
    let message = newMessage.current.value;
};

const Dialog = (propers) => {
    debugger;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                DIALOGS
                <ul>
                    {
                        propers.messagesPage.dialogs.map((data) =>
                            <DialogItem name={data.name} id={data.id}/>
                        )}
                </ul>
            </div>

            <div className={s.massages}>
                {
                    propers.messagesPage.messages.map((data) =>
                        <Message name={data.name} text={data.message}
                                 src={data.src}/>
                    )
                }
                <div className={s.content_sent_message}>
                    <textarea ref={newMessage} rows="3" cols="80"></textarea>
                    <button onClick={createMessage}>Send</button>
                </div>
            </div>
        </div>
    )
};
export default Dialog;