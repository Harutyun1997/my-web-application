import React from 'react';
import s from '../Profile.module.css';
import ProfileStatus from '../ProfileStatus';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!( props.name && props.age && props.location.city)) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    className={s.img_logo} alt=""/>
            </div>
            <div>
                <img src={props.src}
                     className={s.img_user} alt=""/>
                <div className={s.info_user}>
                    <h2>{props.name}</h2>
                    <p>Age: {props.age}</p>
                    <p>City: {props.location.city}</p>
                    <ProfileStatusWithHooks status={props.statusAc} authMe={props.authMe}
                                            updateStatus={props.updateStatus}/>
                    <p>Web Site: https://it-kamasutra.com</p>
                </div>
            </div>
        </div>
    )
};
export default ProfileInfo;