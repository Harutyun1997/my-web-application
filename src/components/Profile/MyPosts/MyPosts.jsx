import React from 'react';
import s from './MyPosts.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Post from "../Post/Post";


const MyPosts = (props) => {
    debugger;
    const updateChangesText = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    const createPost = () => {
        debugger;
        props.addPost();
    };

    return (
        <div>
            <div className={s.my_post}>
                <h1>My post</h1>
                <div className='forms-group'>
                    <textarea onChange={updateChangesText} value={props.newPostText}
                              className={`${s.text_post + ' col-9'}`}
                              rows="4"
                              cols="130"/>
                    <button onClick={createPost} className={`${s.btn_sent + ' btn btn-success col-2 col-lg-1 ml-2'}`}>
                        Sent
                    </button>
                </div>
            </div>
            <Post postData={props.postData}/>
        </div>
    )
};
export default MyPosts;