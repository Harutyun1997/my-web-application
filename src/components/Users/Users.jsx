import React from 'react';
import s from './Users.module.css';
import userIcon from '../../assets/img/users-icon.jpg';
import {NavLink} from 'react-router-dom';

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let userData = JSON.parse(localStorage.getItem('userData'));

    let userDataId = userData.id;
    let userDataFrends = userData.followed;

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return (
        <div className="container text-center">
            <h1>Users</h1>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onChangePage(p)
                    }} className={props.currentPage === p && s.selectedPage}>{p}</span>
                })}
            </div>
            {
                props.users.map(user =>
                    <div className={s.users}>
                        <div className="form-group form-row">
                            <div className="col-2 ml-2 col-lg-1">
                                <NavLink to={'/profile/' + user.id}>
                                    <img
                                        src={user.src != '' ? user.src : userIcon}
                                        alt="" className="d-block"/>
                                </NavLink>
                                {userDataFrends[user.id] ?
                                    <button type="button" disabled={props.followingProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.removeFollow(user.id, userDataId, userData);
                                            }
                                            }
                                            className="btn btn-outline-danger col-11 col-lg-12">
                                        UnFollow</button>
                                    :
                                    <button type="button" disabled={props.followingProgress.some(id => id === user.id)}
                                            onClick={() => {
                                                props.follow(user.id, userDataId, userData);

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
            }{
            pageCount > props.currentPage ?
                <button type="button" onClick={props.onShowMore}
                        className="btn btn-outline-success">Show more
                </button>
                : <span>NET DANIX</span>
        }
        </div>
    )
};

export default Users;