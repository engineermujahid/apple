import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";


export default function Login() {
    const navigate = useNavigate()
    const [loginState, setLoginState] = useState("SignUp");

    const handleLoginStateChange = newState => {
        setLoginState(newState);
    };

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        role: 'customer'
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault()
        if (loginState === 'SignUp') {
            axios.post('http://localhost:8000/register', JSON.stringify(formData), { headers: { 'Content-Type': 'application/json' } })
                .then((res) => {
                    console.log(res)
                    navigate('/', { replace: true });
                })
                .catch(err => console.error(err.response.data))
        }
        else if (loginState === 'Login') {
            axios.post('http://localhost:8000/signIn', JSON.stringify(formData), { headers: { 'Content-Type': 'application/json' } })
                .then((res) => {
                    const decodedToken = jwtDecode(res.data.token)
                    console.log('User id: ', decodedToken.id)
                    navigate('/', { replace: true });
                })
                .catch(err => console.error(err.response.data))
        }
    }
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    {loginState === 'SignUp' ? (
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign up your account
                        </h2>
                    ) : (
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Login to your account
                        </h2>
                    )}

                    <p className="mt-2 text-center text-sm text-gray-600 max-w">
                        Or
                        {loginState === 'SignUp' ? (
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500" onClick={() => handleLoginStateChange('Login')}>
                                &nbsp;Login
                            </a>
                        ) : (
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500" onClick={() => handleLoginStateChange('SignUp')}>
                                &nbsp;Sign Up
                            </a>
                        )}
                    </p>
                </div>


                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6">
                            {loginState === 'SignUp' ?
                                (
                                    <>
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Enter your name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                                Username
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    required
                                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Enter your username"
                                                    value={formData.username}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : <></>}


                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">

                                {loginState === 'Login' ? <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                        Forgot your password?
                                    </a>
                                </div> : <></>}

                            </div>

                            <div>
                                <button
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleSignup}>

                                    {loginState}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
