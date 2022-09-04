import React from 'react';

const Info = () => {
    return (
        <div className='max-w-sm sticky top-[100px] w-full my-5 p-4 h-fit rounded-lg bg-white border border-slate-300'>
            <div className='flex gap-3 items-center'>
                <img className='w-16 rounded-full object-cover h-16' src="https://th.bing.com/th/id/OIP.2wcEIWqAbgR49geWjqZG9wHaJ3?pid=ImgDet&w=446&h=594&rs=1" alt="" />
                <div>
                    <p className='font-medium'>Username</p>
                    <p className=' text-gray-400 text-sm'>Username</p>
                </div>
            </div>
            <div>
                <div className='mt-2 flex justify-between'>
                    <p className='text-gray-400 font-semibold'>
                        Suggested for you
                    </p>
                    <a href='/' className='text-slate-700 font-semibold'>
                        See all
                    </a>
                </div>
                <div className='flex justify-between pt-4 items-center '>
                    <div className='flex items-center gap-3'>
                        <img className='w-10 h-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.2wcEIWqAbgR49geWjqZG9wHaJ3?pid=ImgDet&w=446&h=594&rs=1" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Username</p>
                            <p className='text-xs'>Salman khan and 300+ people follow them</p>
                        </div>
                    </div>
                    <div className='text-sky-400 text-sm cursor-pointer'>
                        <p>Follow</p>
                    </div>
                </div>
                <div className='flex justify-between pt-4 items-center '>
                    <div className='flex items-center gap-3'>
                        <img className='w-10 h-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.2wcEIWqAbgR49geWjqZG9wHaJ3?pid=ImgDet&w=446&h=594&rs=1" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Username</p>
                            <p className='text-xs'>Salman khan and 300+ people follow them</p>
                        </div>
                    </div>
                    <div className='text-sky-400 text-sm cursor-pointer'>
                        <p>Follow</p>
                    </div>
                </div>
                <div className='flex justify-between pt-4 items-center '>
                    <div className='flex items-center gap-3'>
                        <img className='w-10 h-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.2wcEIWqAbgR49geWjqZG9wHaJ3?pid=ImgDet&w=446&h=594&rs=1" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Username</p>
                            <p className='text-xs'>Salman khan and 300+ people follow them</p>
                        </div>
                    </div>
                    <div className='text-sky-400 text-sm cursor-pointer'>
                        <p>Follow</p>
                    </div>
                </div>
                <div className='flex justify-between pt-4 items-center '>
                    <div className='flex items-center gap-3'>
                        <img className='w-10 h-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.2wcEIWqAbgR49geWjqZG9wHaJ3?pid=ImgDet&w=446&h=594&rs=1" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Username</p>
                            <p className='text-xs'>Salman khan and 300+ people follow them</p>
                        </div>
                    </div>
                    <div className='text-sky-400 text-sm cursor-pointer'>
                        <p>Follow</p>
                    </div>
                </div>
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