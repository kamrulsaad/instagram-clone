import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom'
import LoopIcon from '@mui/icons-material/Loop';

const Signup = () => {

    const [image, setImage] = useState(null)
    const [imgURL, setImgURL] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const imageInput = e => {
        if (imgURL) {
            URL.revokeObjectURL(imgURL)
        }
        const file = e.target.files[0]
        setImage(file)
        const url = URL.createObjectURL(file)
        setImgURL(url)
    }

    const handleSubmit = e => {
        e.preventDefault()

        setLoading(true)

        if (!image || !e.target.username.value
            || !e.target.password.value
            || !e.target.full_name.value) {
            return toast.warning("Please provide all the fields")
        }
        else {
            const imgbbAPIkey = '74922ada22c311f177ebbc5022b4cfed';
            const url = `https://api.imgbb.com/1/upload?key=${imgbbAPIkey}`
            const formData = new FormData();
            formData.append('image', image);
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(res => {
                    const url = res.data.url

                    const myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/json");

                    const raw = JSON.stringify({
                        "username": e.target.username.value,
                        "password": e.target.password.value,
                        "profile_picture": url,
                        "full_name": e.target.full_name.value
                    });

                    const requestOptions = {
                        method: 'POST',
                        headers: myHeaders,
                        body: raw,
                        redirect: 'follow'
                    };

                    fetch("http://localhost:5000/signup", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                            console.log(result);
                            if(result.error){
                                toast.error(result.error)
                            }
                            else{
                                toast.success(result.message)
                                navigate('/signin')
                            }
                            setLoading(false)
                        })


                })
        }

    }

    return (
        <div className="relative">
            <img
                src="https://img.freepik.com/free-photo/social-media-instagram-digital-marketing-concept-3d-rendering_106244-1717.jpg?w=1060&t=st=1662333075~exp=1662333675~hmac=900dbe6e13310b771daec40d18d0e0b81a65aa8a04a60ca370e9d4bb0295709b"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative min-h-screen bg-gray-900 bg-opacity-100">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Join now to get a real life social media experience on <span className='gradient-bg grand-hotel'>Instagram</span> <br /> Its never too late to get connected with the world
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Already registered?
                            </p>
                            <Link
                                to="/signin"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                            >
                                Log in to your account
                                <svg
                                    className="inline-block w-3 ml-2"
                                    fill="currentColor"
                                    viewBox="0 0 12 12"
                                >
                                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                    Register
                                </h3>
                                <form noValidate onSubmit={handleSubmit}>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="username"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Username
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="username"
                                            name="username"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="full_name"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="full_name"
                                            name="full_name"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="password"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2 flex">
                                        <label
                                            htmlFor="profile_picture"
                                            className="mb-1 w-32 h-32 flex justify-center items-center border-2 cursor-pointer rounded-lg"
                                        >
                                            <AddCircleIcon />
                                        </label>
                                        <input
                                            required
                                            type="file"
                                            onChange={imageInput}
                                            accept='image/*'
                                            className="hidden"
                                            id="profile_picture"
                                            name="profile_picture"
                                        />
                                        {
                                            imgURL && <img className='w-32 h-32 rounded-lg ml-2 object-cover' src={imgURL} alt='' />
                                        }
                                    </div>
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Sign Up {loading && <LoopIcon className='animate-spin ml-2' ></LoopIcon>}
                                        </button>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm">
                                        We respect your privacy.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;