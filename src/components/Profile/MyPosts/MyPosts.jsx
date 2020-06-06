import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {AddMessageForm} from '../../common/FormsControls/FormsAddMessage';

const MyPosts = (props) => {


    return (
        <div>
            <div className={s.my_post}>
                <h1>My post</h1>
                <div className='forms-group'>

                    <AddMessageForm addMessage={props.addMessage}/>
                </div>
            </div>
            <Post postData={props.postData}/>
        </div>
    )
};
export default MyPosts;