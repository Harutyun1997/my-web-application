import React from 'react';
import s from './Users.module.css';
import userIcon from '../../assets/img/users-icon.jpg';
import {NavLink} from 'react-router-dom';

const User = ({user, ...props}) => {

    let imageSrc = user.src;
    if (imageSrc && imageSrc.indexOf('http') === -1) {
        imageSrc = require('../../assets/usersImage/' + imageSrc);
    }

    return (<div key={user.id} className={s.users}>
            <div className="form-group form-row">
                <div className="col-2 ml-2 col-lg-1">
                    <NavLink to={'/profile/' + user.id}>
                        <img
                            src={imageSrc !== '' ? imageSrc : userIcon}
                            alt="" className="d-block"/>
                    </NavLink>
                    {props.me.followed[user.id] ?
                        <button type="button" disabled={props.followingProgress.some(id => id === user.id)}
                                onClick={() => {
                                    props.removeFollow(user.id, props.me.id, props.me);
                                }
                                }
                                className="btn btn-outline-danger col-11 col-lg-12">
                            UnFollow</button>
                        :
                        <button type="button" disabled={props.followingProgress.some(id => id === user.id)}
                                onClick={() => {
                                    props.follow(user.id, props.me.id, props.me);

                                }
                                }
                                className="btn btn-outline-success col-11 col-lg-12">Follow</button>
                    }
                </div>
                <div className="col-8 form-row">
                    <div className="col-6">
                        <p>{user.name}</p>
                        <p>{user.status}</p>
                    </div>
                    <div className="col-6">
                        <p>{user.location.country}</p>
                        <p>{user.location.city}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default User;