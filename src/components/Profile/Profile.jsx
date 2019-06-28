import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (propers) => {
    propers = propers.data;

    return (
        <div>
            <ProfileInfo data={propers.userData}/>
            <MyPosts data={propers.postData}/>
        </div>
    )
};
export default Profile;