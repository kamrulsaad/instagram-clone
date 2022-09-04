import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import React from 'react'

const Post = () => {
    return (
        <div className='max-w-md my-3 rounded-lg bg-white border border-slate-300'>
            <div className='flex justify-between p-4 items-center '>
                <div className='flex items-center gap-3'>
                    <img className='w-10 h-10 rounded-full object-cover' src="https://th.bing.com/th/id/OIP.2wcEIWqAbgR49geWjqZG9wHaJ3?pid=ImgDet&w=446&h=594&rs=1" alt="" />
                    <div>
                        <p className='font-bold text-sm'>Username</p>
                        <p className='text-xs'>Username</p>
                    </div>
                </div>
                <div className='text-black'>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
            </div>
            <div>
                <img className='w-full' src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg" alt="" />
            </div>
            <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-2">
                    <div className='cursor-pointer'>
                        <FavoriteBorderIcon></FavoriteBorderIcon>   
                    </div>
                    <div className='cursor-pointer'>
                        <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                    </div>
                    <div className='cursor-pointer'>
                        <SendIcon></SendIcon>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <BookmarkBorderIcon></BookmarkBorderIcon>
                </div>
            </div>
            <div className='p-3'>
                <p className='font-medium text-sm'>1,000 Likes </p>
                <p className='text-sm'>
                    <span className='font-medium'>username </span>
                    Nice Pic
                </p>
                <p className='text-gray-400 text-xs py-1'>100 comments</p>
                <p className='text-sm'>
                    <span className='font-medium'>username </span>
                    Nice Pic
                </p>
            </div>
            <hr />
            <form className='p-3 flex gap-2'>
                <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
                <input type="text" className='border-b w-full border-sky-200 focus:border-sky-400 focus:outline-none texxt-sm' />
                <button className='text-sky-600 text-sm font-medium' type='submit'>Post</button>
            </form>
        </div>
    );
};

export default Post;