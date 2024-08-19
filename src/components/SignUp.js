import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

const SignUp = () => {

    const getUsers = JSON.parse(localStorage.getItem('userid'));

    const { v4: uuidv4 } = require('uuid');
    const [userId, setUserId] = useState(uuidv4());
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [users, setUsers] = useState([...getUsers]);

    console.log(users);
    const handleSignUp = () => {
        setUserId(uuidv4());
        setUserName('');
        setEmail('');
        setPassword('');
        const user = {
            'id': userId,
            'userName': userName,
            'email': email,
            'password': password,
            'gender': gender
        };
        users.push(user);
        setUsers(users);
        console.log(users);
        window.localStorage.setItem("userid", JSON.stringify(users));
        window.location.href = "login"
    }

    const handleChange = (e) => {
        if (e.target.checked) {
            setGender(e.target.value);
        }
    }

    return (
        <>
            <div className='h-screen bg-zinc-800 text-white'>
                <div className='flex justify-center '>
                    <h1 className='text-blue-500 text-4xl mt-4 pt-16 font-semibold'>Sign Up</h1>
                </div>
                <div className='my-5 h-20 space-y-2'>
                    <label htmlFor='fullname' className='block text-xl w-1/4 m-auto flex pl-2'>
                        Full Name
                    </label>
                    <input type='text' id='fullname' name='fullname' value={userName} onChange={(e) => setUserName(e.target.value)} required
                        className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium'
                        placeholder='Full Name' />
                </div>
                <div className='my-5 h-20 space-y-2'>
                    <label htmlFor='email' className='block text-xl w-1/4 m-auto flex pl-2'>
                        Email
                    </label>
                    <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required
                        className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium'
                        placeholder='Create Password' />
                </div>
                <div className='my-5 h-20 space-y-2'>
                    <label htmlFor='password' className='block text-xl w-1/4 m-auto flex pl-2'>
                        Create Password
                    </label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required
                        className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium'
                        placeholder='Create Password' />
                </div>
                <div className='h-20 space-y-2'>
                    <label htmlFor='gender' className='block text-xl w-1/4 m-auto flex pl-2'>
                        Gender
                    </label>
                    <div className='flex justify-center w-1/4 m-auto'>
                        <div className='flex justify-center w-1/2'>
                            <label htmlFor='male'>
                                Male
                            </label>
                            <input type='radio' name='gender' id='male' value={'male'} onChange={handleChange}
                                className='mx-4' />
                        </div>
                        <div className='flex justify-center w-1/2'>
                            <label htmlFor='female'>
                                Female
                            </label>
                            <input type='radio' name='gender' id='female' value={'female'} onChange={handleChange}
                                className='mx-4' />
                        </div>
                    </div>
                </div>
                <button className='bg-blue-500 rounded w-1/5 h-8 text-lg font-medium '
                    onClick={handleSignUp}>
                    Sign Up
                </button>
                <p>Already Registered? <Link to={'/login'}><span className='underline'>Log in</span></Link> </p>
            </div>
        </>
    )
}

export default SignUp