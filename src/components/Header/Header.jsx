import React from 'react';
import './header.css';
import {NavLink} from "react-router-dom";

const Header = ({signOutAccount, isAuth, login}) => {
    const signOut = () => {
        signOutAccount();
    };

    return (
        <header className='header'>
            <img src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt=""/>
            <div className='nav-item text-white float-right'>

                {isAuth ?
                    <div>{login}
                        <NavLink className='nav-link text-white' onClick={signOut} to={'/login'}>LoginOut</NavLink>
                    </div> : ''}
            </div>
        </header>
    )
};
export default Header;