import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const users = JSON.parse(localStorage.getItem("userid"));

    const handleSignIn = () => {
        for (let index in users) {
            if (users[index].email === email && users[index].password === password) {
                console.log('login');
                const tempKey = users[index].id;
                window.localStorage.setItem('loginKey', tempKey);
                window.location.href = "todo-list";
            }
            else {
                console.log('invalid email or password');
            }
        }
    }
    return (
        <>
            <div className='h-screen bg-zinc-800 text-white'>
                <div className='flex justify-center '>
                    <h1 className='text-blue-500 text-4xl mt-20 pt-16 font-semibold'>Log in</h1>
                </div>
                <div className='my-5 h-20 space-y-2'>
                    <label htmlFor='email' className='block text-xl w-1/4 m-auto flex pl-2'>
                        Email
                    </label>
                    <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                        className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium'
                        placeholder='Email Address' />
                </div>
                <div className='my-3  h-20 space-y-2'>
                    <label htmlFor='password' className='block text-xl w-1/4 m-auto flex pl-2 '>
                        Password
                    </label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}
                        className='rounded w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium'
                        placeholder='Password' />
                </div>
                <button onClick={handleSignIn}
                    className='bg-blue-500 rounded w-1/5 h-8 text-lg font-medium'>
                    Log In
                </button>
                <p className='mt-2'>You don't have an accout? <Link to={'/'}><span className='underline'>Sign Up</span></Link></p>
            </div>
        </>
    )
}

export default SignIn;
