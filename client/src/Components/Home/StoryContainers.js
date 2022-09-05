import React, { useEffect, useState } from 'react';

const StoryContainers = () => {

    const user = JSON.parse(localStorage.getItem("user"))

    const [users, setUsers] = useState([])

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/allUsers", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (user) {
                    const other_users = result.filter(res => res.username !== user.username)
                    setUsers(other_users.reverse().slice(0, 7))
                } else{
                    setUsers(result.slice(0,7))
                }
            })
    }, [user])

    return (
        <div className='bg-white flex max-w-md justify-between items-center gap-3 p-2 my-3 border border-slate-300 md:rounded-lg'>
            {
                users.map((u, index) => <div key={index}>
                    <img className='md:w-12 md:h-12 sm:w-10 sm:h-10 w-8 h-8 gradient-bg outline-2 outline outline-orange-600 ring-2 ring-red-accent-400 cursor-pointer rounded-full object-cover' src={u.profile_picture} alt="" />
                </div>)
            }
        </div>
    );
};

export default StoryContainers;