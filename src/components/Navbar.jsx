import React from 'react';

import { NavLink } from 'react-router-dom';


const Navbar = () => {

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <NavLink 
                        end to="/" 
                        className={({ isActive }) => isActive ? 'navbar-btn' : 'nav-dis-btn'}>
                            Все котики
                    </NavLink>
                    <NavLink 
                        end to="/favorit" 
                        className={({ isActive }) => isActive ? 'navbar-btn' : 'nav-dis-btn'}>
                            Любимые котики
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
    
};

export default Navbar;