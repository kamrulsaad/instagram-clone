import React from 'react';
import { Nav } from '../Shared/Navbar';
import Info from './Info';
import Posts from './Posts';

const Home = () => {
    return (
        <>
            <Nav></Nav>
            <div className='flex justify-center gap-6'>
                <Posts></Posts>
                <Info></Info>
            </div>
        </>
    );
};

export default Home;