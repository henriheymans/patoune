import React from 'react';

import "./Navbar.scss";

import NavbarAvatar from "../../img/icons/navbar-avatar.svg";

const Navbar = () => {
    return (
        <div className="l-navbar">
            <div className="navbar-logo">PATOUNE</div>
            <div className="navbar-links">
                Walks
                <img className="navbar-avatar" src={NavbarAvatar} alt=""/>
            </div>
        </div>
    );
}
 
export default Navbar;