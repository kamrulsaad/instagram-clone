import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import LoopIcon from '@mui/icons-material/Loop'

const Login = () => {

    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        setLoading(true)
        e.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": e.target.username.value,
            "password": e.target.password.value
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:5000/signin", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.error) {
                    toast.error(result.error)
                } else {
                    toast.success("Login Successfull")
                    localStorage.setItem("token", result.token)
                    localStorage.setItem("user", JSON.stringify(result.user))
                    navigate('/')
                }
                setLoading(false)
            })

    }

    return (
        <div className="relative">
            <img
                src="https://img.freepik.com/free-photo/social-media-instagram-digital-marketing-concept-3d-rendering_106244-1717.jpg?w=1060&t=st=1662333075~exp=1662333675~hmac=900dbe6e13310b771daec40d18d0e0b81a65aa8a04a60ca370e9d4bb0295709b"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative min-h-screen bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Join now to get a real life social media experience. Its never too late to get connected with the world
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                Dont have an account?
                            </p>
                            <Link
                                to="/signup"
                                aria-label=""
                                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                            >
                                Sign up today
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
                                    Sign in
                                </h3>
                                <form onSubmit={handleSubmit}>
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
                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                        >
                                            Sign In {loading && <LoopIcon className='animate-spin ml-2' ></LoopIcon>}
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

export default Login;