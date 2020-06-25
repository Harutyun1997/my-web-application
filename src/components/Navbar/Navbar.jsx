import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink></li>
                <li><NavLink to="/dialog" activeClassName={s.activeLink}>Message</NavLink></li>
                <li><NavLink to="news" activeClassName={s.activeLink}>News</NavLink></li>
                <li><NavLink to="music" activeClassName={s.activeLink}>Music</NavLink></li>
                <li><NavLink to="users" activeClassName={s.activeLink}>Search Users</NavLink></li>
                <li><NavLink to="settings" activeClassName={s.activeLink}>Settings</NavLink></li>
            </ul>
        </nav>
    )
};
export default NavBar;