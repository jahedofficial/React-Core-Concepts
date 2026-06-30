import React from 'react';

const Post = ({ Post }) => {
    console.log(Post)
    const { id, title, body } = Post;
    return (
        <div className='post'>
            <h3>{title}</h3>
            <h6>id : {id}</h6>
            <h4>{body}</h4>
        </div>
    );
};

export default Post;