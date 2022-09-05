import React, { useEffect, useState } from 'react';
import Post from './Post'
import StoryContainers from './StoryContainers'

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://react-social-clone.herokuapp.com/insta_posts')
            .then(res => res.json())
            .then(res => setPosts(res.data.reverse()))
    }, [])

    return (
        <div className='mt-2'>
            <StoryContainers></StoryContainers>
            {
                posts?.map((p, index) => <Post key={index} post={p}></Post>)
            }
        </div>
    );
};

export default Posts;