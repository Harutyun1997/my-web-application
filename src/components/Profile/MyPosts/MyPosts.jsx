import React from 'react';
import s from './MyPosts.module.css';
import Post from '../Post/Post';
import {addPost} from "../../../redax/state";

let newPostElement = React.createRef();

const createPost = () => {
    let text = newPostElement.current.value;
    addPost(text);
    newPostElement.current.value = '';
};
const MyPosts = (propers) => {
    propers = propers.data;

    return (
        <div>
            <div className={s.my_post}>
                <h1>My post</h1>
                <div>
                    <textarea ref={newPostElement} className={s.text_post} rows="4" cols="130"></textarea>
                    <button onClick={createPost} className={s.btn_sent}>Sent</button>
                </div>
            </div>
            <Post data={propers}/>

        </div>
    )
};
export default MyPosts;