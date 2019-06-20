import React from 'react';
import './css/profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className="img-logo" alt=""/>
            </div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hJQbREo0WcWQRR0ml95B4zsK-vtQQsiSpu7cZ_f5ay9R0omECg"
                    className="img-user" alt=""/>
                <div className="info-user">
                    <h2>Dmitry K.</h2>
                    <p>Date of Birth: 2 january</p>
                    <p>City: Minsk</p>
                    <p>Education: BSU' 11</p>
                    <p>Web Site: https://it-kamasutra.com</p>
                </div>
            </div>

            <div className='my-post'>
                <h1>My post</h1>
                <div>
                    <textarea className='text-post' rows="5" cols="115"></textarea>
                    <button className='btn-sent'>Sent</button>
                </div>
            </div>
            <div className='other-tag'>
                <div>New post</div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
};
export default Profile;