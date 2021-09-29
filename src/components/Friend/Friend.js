import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name, id, phone, website, address} = props.friend;
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>{name} {id}</h2>
            <h5>Call me: {phone}</h5>
            <p>Visit me: {website}</p>
            <p><small>Address: {address?.city}</small></p>
            <Link to={`/friend/${id}`}>Visit me</Link>
        </div>
    );
};

export default Friend;