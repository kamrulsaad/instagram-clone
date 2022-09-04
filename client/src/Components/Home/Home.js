import React from 'react';
import Info from './Info';
import Posts from './Posts';

const Home = () => {
    return (
        <div className='flex justify-center gap-6'>
            <Posts></Posts>
            <Info></Info>
        </div>
    );
};

export default Home;