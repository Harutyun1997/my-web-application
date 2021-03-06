import React from 'react';
import s from '../MyPosts/MyPosts.module.css';


const Post = (props) => {
    return (
        <div className={s.other_tag}>
            {

                [...props.postData].reverse().map((user) =>
                    <div key={user.id} className={s.post}>
                        <img src="https://powerviewltd.com/wp-content/uploads/2018/03/profile-img-1.jpg"
                             alt="User" className={s.img_post}/>
                        <div>
                            <span>{user.name}</span>
                            <p>{user.text}</p>
                            <span>Like</span>
                        </div>
                    </div>
                )}
        </div>
    )
};
export default Post;