import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialog" activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div><a href="">News</a></div>
            <div><a href="">Music</a></div>
            <div><a href="">Settings</a></div>
        </nav>
    )
};
export default NavBar;