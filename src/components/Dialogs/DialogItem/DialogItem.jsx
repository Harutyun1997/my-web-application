import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {

    return (
        <li>
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
            </div>
        </li>
    )
};

export default DialogItem;