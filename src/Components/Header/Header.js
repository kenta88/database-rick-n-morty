import React from 'react';

import './Header.css';

import Logo from './logo-rick-n-morty.png';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <img src={Logo} alt="logo" />
            </div>
        </div>
    );
}

export default Header;
