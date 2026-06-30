import React from 'react';

const User = ({ User }) => {
    console.log(User)
    const { name, id, username, email, address } = User;
    return (
        <div>
            <h4>UID: {username}</h4>
            <h3>Name: {name}</h3>
            <h4>Id : {id}</h4>
            <h4>Email : {email}</h4>
            <h4>Address : {address.city}</h4>
        </div>
    );
};

export default User;