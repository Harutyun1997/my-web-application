import React from 'react';
import s from '../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={s.massage}>
            <div>
                <img src={props.src ? props.src : ''} alt="User"/>
                <span>{props.name}</span>
            </div>
            <p>{props.text}</p>
        </div>
    )
};

export default Message;