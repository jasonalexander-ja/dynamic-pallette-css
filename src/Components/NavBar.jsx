import React from 'react';
import '../CSS/Components/nav-bar.scss';

export const NavBar = props => {
    return (
        <header className="nav-bar">
            {props.children}
        </header>
    );
}

export default NavBar;