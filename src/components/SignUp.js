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

    const handleSignUp = () => {
        if (userName === '' || userName === null || email === '' || email === null || password === '' || password === null) {
            console.error('empty');
        }
        else {
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
            window.location.href = "login";
        }
    }

    const handleChange = (e) => {
        if (e.target.checked) {
            setGender(e.target.value);
        }
    }

    return (
        <>
            <div className='h-screen bg-zinc-800 text-white'>
                <div className='flex justify-center max-[640px]:w-full '>
                    <h1 className='text-blue-500 text-4xl mt-4 pt-16 font-semibold sm:pt-12'>Sign Up</h1>
                </div>
                <div className='my-5 h-20 space-y-2 flex justify-center items-center flex-col '>
                    <label htmlFor='fullname' className=' text-xl  w-1/4 m-auto flex pl-2 max-[640px]:w-1/2 max-[640px]:text-lg max-[640px]:text-center'>
                        Full Name
                    </label>
                    <input type='text' id='fullname' name='fullname' value={userName} onChange={(e) => setUserName(e.target.value)} required
                        className='rounded-md w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium '
                        placeholder='Full Name' />
                </div>
                <div className='my-5 h-20 space-y-2 flex justify-center items-center flex-col'>
                    <label htmlFor='email' className=' text-xl w-1/4 m-auto flex pl-2 max-[640px]:w-1/2 max-[640px]:text-lg'>
                        Email
                    </label>
                    <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required
                        className='rounded-md w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium'
                        placeholder='Create Password'
                        autocomplete="email" />
                </div>
                <div className='my-5 h-20 space-y-2 flex justify-center items-center flex-col'>
                    <label htmlFor='password' className=' text-xl w-1/4 m-auto flex pl-2 max-[640px]:w-1/2 max-[640px]:text-lg'>
                        Create Password
                    </label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required
                        className='rounded-md w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium'
                        placeholder='Create Password' />
                </div>
                <div className='h-20 space-y-2'>
                    <label htmlFor='gender' className=' text-xl w-1/4 m-auto flex pl-2 max-[640px]:w-1/2 max-[640px]:text-lg'>
                        Gender
                    </label>
                    <div className='flex justify-center w-1/4 m-auto  max-[640px]:w-full'>
                        <div className='flex justify-center w-1/2 max-[640px]:w-1/4 '>
                            <label htmlFor='male '>
                                Male
                            </label>
                            <input type='radio' name='gender' id='male' value={'male'} onChange={handleChange}
                                className='mx-4 cursor-pointer' />
                        </div>
                        <div className='flex justify-center w-1/2 max-[640px]:w-1/4'>
                            <label htmlFor='female '>
                                Female
                            </label>
                            <input type='radio' name='gender' id='female' value={'female'} onChange={handleChange}
                                className='mx-4 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <button className='bg-blue-500 rounded w-1/5 h-8 text-lg font-medium max-[640px]:w-3/4 hover:bg-blue-600'
                        onClick={handleSignUp}>
                        Sign Up
                    </button>
                    <p>Already Registered? <Link to={'/login'}><span className='underline'>Log in</span></Link> </p>
                </div>
            </div>
        </>
    )
}

export default SignUp