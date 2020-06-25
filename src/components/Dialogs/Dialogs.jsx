import React from 'react';
import s from './Dialogs.module.css'
import '../../App.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {AddMessageForm} from '../common/FormsControls/FormsAddMessage';

const Dialog = React.memo(props => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <ul>
                    {
                        props.dialogsData.map(data =>
                            <DialogItem key={data.id} name={data.name} id={data.id}/>
                        )
                    }
                </ul>
            </div>
            <div className={s.massages}>
                {
                    props.messageData.map((data) =>
                        <Message key={data.id} id={data.id} name={data.name} text={data.message}
                                 src={data.src}/>
                    )
                }
                <div className={s.content_sent_message}>
                    <AddMessageForm addMessage={props.addMessage}/>
                </div>
            </div>

        </div>);
});


export default Dialog;