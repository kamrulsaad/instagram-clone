import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import React, { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {

    const [liked, setLiked] = useState(post.user_has_liked)
    const [save, setSave] = useState(false)
    const [likes, setLikes] = useState(post.likes_count)
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState(post.comments)

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("user"))

    const addComment = (e) => {
        e.preventDefault()

        if (!user) {
            return navigate('/signin')
        }
        const newComment = {
            username : user.full_name,
            comment
        }
        setComments([...comments, newComment])
        e.target.reset()
    }


    return (
        <div className='max-w-md my-3 md:rounded-lg bg-white border border-slate-300'>
            <div className='flex justify-between p-4 items-center '>
                <div className='flex items-center gap-3'>
                    <img className='w-10 h-10 rounded-full object-cover' src={post.user.profile_picture} alt="" />
                    <div>
                        <p className='font-bold text-sm'>{post.user.full_name}</p>
                        <p className='text-xs cursor-pointer'>@{post.user.username}</p>
                    </div>
                </div>
                <div className='text-black'>
                    <MoreHorizIcon></MoreHorizIcon>
                </div>
            </div>
            <div>
                <img className='w-full' src={post.images.standard_resolution.url} alt="" />
            </div>
            <div className="flex justify-between items-center p-2">
                <div className="flex items-center gap-2">
                    <div onClick={() => {
                        setLiked(!liked)
                        setLikes(liked ? likes - 1 : likes + 1)
                    }} className='cursor-pointer'>
                        {
                            user ?
                                (liked ? <FavoriteIcon className='text-red-500'></FavoriteIcon> : <FavoriteBorderIcon></FavoriteBorderIcon>)
                                : <Link to={'signin'}><FavoriteBorderIcon></FavoriteBorderIcon></Link>
                        }
                    </div>
                    <div className='cursor-pointer'>
                        <ChatBubbleOutlineIcon></ChatBubbleOutlineIcon>
                    </div>
                    <div className='cursor-pointer'>
                        <SendIcon></SendIcon>
                    </div>
                </div>
                <div onClick={() => setSave(!save)} className='cursor-pointer'>
                    {
                        user ?
                            (save ? <BookmarkIcon></BookmarkIcon> : <BookmarkBorderIcon></BookmarkBorderIcon>)
                            : <Link to={'signin'}><BookmarkBorderIcon></BookmarkBorderIcon></Link>
                    }
                </div>
            </div>
            <div className='p-3'>
                <p className='font-medium text-sm'>{likes} Likes </p>
                <p className='text-sm'>
                    <span className='font-medium'>{post.caption.from.full_name} </span>
                    {
                        post?.tags?.map((tag, index) => <span className='font-semibold text-sky-500 mr-1 cursor-pointer' key={index}>#{tag}</span>)
                    }
                    {post.caption.text}
                </p>
                <p className='text-gray-400 text-xs py-1'>100 comments</p>
                {
                    comments?.map((c, index) => <p key={index} className='text-sm'>
                        <span className='font-medium mr-1'>{c.username}</span>
                        {c.comment}
                    </p>)
                }
            </div>
            <hr />
            <form className='p-3 flex gap-2' onSubmit={addComment} >
                <SentimentSatisfiedAltIcon></SentimentSatisfiedAltIcon>
                <input onChange={(e) => setComment(e.target.value)} type="text" className='border-b w-full border-sky-200 focus:border-sky-400 focus:outline-none text-sm' />
                <button disabled={!comment} className='text-sky-600 disabled:cursor-not-allowed transition-all duration-300 disabled:text-sky-200 text-sm font-medium' type='submit'>Post</button>
            </form>
        </div>
    );
};

export default Post;