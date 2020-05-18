import React from 'react';
import s from './Dialogs.module.css'
import '../../App.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let newMessage = React.createRef();

const Dialog = (props) => {
    debugger;
    const createMessage = () => {
        props.addMessage();
    };
    const updateTextContent = () => {
        let message = newMessage.current.value;
        props.updateTextContent(message);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <ul>
                    {
                        props.dialogsData.map(data =>
                            <DialogItem name={data.name} id={data.id}/>
                        )
                    }
                </ul>
            </div>
            <div className={s.massages}>
                {
                    props.messageData.map((data) =>
                        <Message name={data.name} text={data.message}
                                 src={data.src}/>
                    )
                }
                <div className={s.content_sent_message}>
                    <textarea ref={newMessage} onChange={updateTextContent} rows="3" cols="80"
                              value={props.newMessageText}/>
                    <button onClick={createMessage} className='btn btn-success ml-2'>Send</button>
                </div>
            </div>
        </div>);

};
export default Dialog;