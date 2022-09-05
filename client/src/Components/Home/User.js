import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {

    const loggedinUser = JSON.parse(localStorage.getItem("user"))

    const [follow, setFollow] = useState(false)

    return (
        <div className='flex justify-between pt-4 items-center '>
            <div className='flex items-center gap-3'>
                <img className='w-10 h-10 rounded-full object-cover' src={user.profile_picture} alt="" />
                <div>
                    <p className='font-bold text-sm'>{user.username}</p>
                    <p className='text-xs'>Gil Barua and 300+ people follow them</p>
                </div>
            </div>
            <div className='text-sky-400 text-sm cursor-pointer'>
                {loggedinUser ? <p onClick={() => setFollow(!follow)}>{follow ? "Following" : "Follow"}</p> : <Link to={'/signin'}>Follow</Link>}
            </div>
        </div>
    );
};

export default User;