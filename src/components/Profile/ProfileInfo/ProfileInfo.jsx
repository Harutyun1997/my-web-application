import React from 'react';
import s from '../Profile.module.css';

const ProfileInfo = (propers) => {
    propers = propers.data;
    if (!( propers.name && propers.age && propers.city)) {
        propers = {
            name: 'Guest',
            age: '',
            city: '',
        }
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className={s.img_logo} alt=""/>
            </div>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hJQbREo0WcWQRR0ml95B4zsK-vtQQsiSpu7cZ_f5ay9R0omECg"
                    className={s.img_user} alt=""/>
                <div className={s.info_user}>
                    <h2>{propers.name}</h2>
                    <p>Age: {propers.age}</p>
                    <p>City: {propers.city}</p>
                    <p>Education: BSU' 25</p>
                    <p>Web Site: https://it-kamasutra.com</p>
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo;