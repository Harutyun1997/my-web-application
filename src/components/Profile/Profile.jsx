import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (propers) => {
    debugger;

    return (
        <div>
            <ProfileInfo data={propers.profilePage.newPostText}/>
            <MyPosts data={propers.profilePage.posts}/>
        </div>
    )
};
export default Profile;