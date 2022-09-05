import React, { useEffect, useState } from 'react';
import { Nav } from '../Shared/Navbar';
import User from './User';

const Info = ({ route }) => {

    const user = JSON.parse(localStorage.getItem("user"))

    const [users, setUsers] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://react-social-clone.herokuapp.com/allUsers", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (user) {
                    const other_users = result.filter(res => res.username !== user.username)
                    setUsers(other_users.reverse().slice(0, 5))
                } else{
                    setUsers(result.slice(0,5))
                }
            })
    }, [user])

    return (
        <>
            {
                route && <Nav></Nav>
            }
            <div className={`max-w-sm sticky top-[76px] ${!route && 'hidden'} mx-auto md:mx-0 md:block w-full my-5 p-4 h-fit md:rounded-lg bg-white border border-slate-300`}>
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

                    {
                        users.map((user, index) => <User key={index} user={user}></User>)
                    }
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
        </>
    );
};

export default Info;