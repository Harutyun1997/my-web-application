import React from 'react';
import s from '../Profile.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks.tsx";

const ProfileInfoDataUser = (props) => {

    if (!( props.name && props.age && props.location.city)) {
        return <Preloader/>
    }

    return (
        <div>
            <button onClick={props.updateUserInfo}>edit</button>
            <div className={s.info_user}>
                <h2>{props.name}</h2>
                <p>Age: {props.age}</p>
                <p>City: {props.location.city}</p>
                <ProfileStatusWithHooks status={props.statusAc} authMe={props.authMe}
                                        updateStatus={props.updateStatus}/>
                <p>Web Site: https://it-kamasutra.com</p>
            </div>
        </div>
    )
};
export default ProfileInfoDataUser;