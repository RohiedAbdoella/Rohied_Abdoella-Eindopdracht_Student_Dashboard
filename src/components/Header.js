import React from 'react';
import winc_logo from '../images/winc_logo.png';
import '../styles/Header.css';


function Header() {
    return (
        <div className="header">
            <h1>STUDENT DASHBOARD</h1>
            <img src={winc_logo} alt="WINC Academy Logo" className="winc_logo" />
        </div>
    );
}

export default Header;