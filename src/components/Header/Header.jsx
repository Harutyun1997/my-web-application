import React from 'react';
import './header.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const signOut = () => {
        props.signOutAccount();
    };

    return (
        <header className='header'>
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
            <div className='nav-item text-white float-right'>

                {props.isAuth ?
                    <div>{props.login}
                        <NavLink className='nav-link text-white' onClick={signOut} to={'/login'}>LoginOut</NavLink>
                    </div> :
                    <NavLink className='nav-link text-white' to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
};
export default Header;