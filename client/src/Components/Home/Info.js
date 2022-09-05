import React from 'react';
import User from './User';

const Info = ({route}) => {

    const user = JSON.parse(localStorage.getItem("user"))

    return (
        <div className={`max-w-sm sticky top-[100px] ${!route && 'hidden'} mx-auto md:mx-0 md:block w-full my-5 p-4 h-fit md:rounded-lg bg-white border border-slate-300`}>
            {user && <div className='flex gap-3 items-center'>
                <img className='w-16 rounded-full object-cover h-16' src={user.profile_picture} alt="" />
                <div>
                    <p className='font-medium'>{user.full_name}</p>
                    <p className=' text-gray-600 text-sm'>@{user.username}</p>
                </div>
            </div>}
            <div>
                <div className='mt-2 flex justify-between'>
                    <p className='text-gray-400 font-semibold'>
                        Suggested for you
                    </p>
                    <a href='/' className='text-slate-700 font-semibold'>
                        See all
                    </a>
                </div>
                
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <User></User>
                <div className='text-xs text-gray-500 mt-2'>
                    <a className='hover:underline' href="/">About </a>
                    <a className='hover:underline' href="/">Help </a>
                    <a className='hover:underline' href="/">Press </a>
                    <a className='hover:underline' href="/">API </a>
                    <a className='hover:underline' href="/">Jobs </a>
                    <a className='hover:underline' href="/">Privacy </a>
                    <a className='hover:underline' href="/">Terms </a>
                    <a className='hover:underline' href="/">Locations </a>
                    <br />
                    <p className='mt-3'>Language: English </p>
                    <br />
                    <p>© 2022 INSTAGRAM FROM META</p>
                </div>
            </div>
        </div>
    );
};

export default Info;