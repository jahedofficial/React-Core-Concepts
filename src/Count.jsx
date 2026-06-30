import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0)

    const handelAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    const handelReduce = () => {
        if (count > 0) {
            const newCount = count - 1;
            setCount(newCount)
        }

    }

    return (
        <div>
            <h3>Count :{count} </h3>
            <button onClick={handelAdd}>Add</button>
            <button onClick={handelReduce}>reduce</button>
        </div>
    );
};

export default Count;