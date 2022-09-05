import React, { useEffect, useState } from 'react';
import Post from './Post'

const Posts = () => {

    const [posts, setPosts] = useState([]) 

    useEffect(() => {
        fetch('instaData.json')
        .then(res => res.json())
        .then(res => setPosts(res.data))
    }, [])

    return (
        <div className='mt-2'>
            {
                posts.map((p, index) => <Post key={index} post ={p}></Post>)
            }
        </div>
    );
};

export default Posts;