import React from 'react';
import './Bio.css';
const Bio = ({ singer }) => {
    return (
        <div className='bio'>
            <h4>Name : {singer.name}</h4>
            <h3>Age : {singer.Age}</h3>
        </div>
    );
};

export default Bio;