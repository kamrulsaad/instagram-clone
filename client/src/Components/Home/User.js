import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    const [follow, setFollow] = useState(false)

    return (
        <div className='flex justify-between pt-4 items-center '>
            <div className='flex items-center gap-3'>
                <img className='w-10 h-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.2wcEIWqAbgR49geWjqZG9wHaJ3?pid=ImgDet&w=446&h=594&rs=1" alt="" />
                <div>
                    <p className='font-bold text-sm'>Username</p>
                    <p className='text-xs'>Salman khan and 300+ people follow them</p>
                </div>
            </div>
            <div className='text-sky-400 text-sm cursor-pointer'>
                {user ? <p onClick={() => setFollow(!follow)}>{follow ? "Following" : "Follow"}</p> : <Link to={'/signin'}>Follow</Link>}
            </div>
        </div>
    );
};

export default User;