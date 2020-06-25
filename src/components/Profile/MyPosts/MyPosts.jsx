import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";
import {AddMessageForm} from '../../common/FormsControls/FormsAddMessage';

const MyPosts = (props) => {
    console.log('RENDER My Post');
    return (
        <div className={s.my_post_container}>
            <div className={s.my_post}>
                <h1>My post</h1>
                <div className='forms-group'>

                    <AddMessageForm myName={props.myName} addMessage={props.addMessage}/>
                </div>
            </div>
            <Post postData={props.postData}/>
        </div>
    )
};
export default MyPosts;