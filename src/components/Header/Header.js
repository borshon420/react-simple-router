import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
                color: "red"
    }
    return (
        <nav>
            <NavLink activeStyle={activeStyle}to="/home">Home</NavLink>
            <NavLink activeStyle={{
                fontWeight: "bold",
                color: "red"
                }}
                to="/friends"
                >Friends</NavLink>
            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>
        </nav>
    );
};

export default Header;