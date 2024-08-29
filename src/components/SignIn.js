import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const users = JSON.parse(localStorage.getItem("userid"));
    console.log(users)
    const handleSignIn = () => {
        if (email === '' || email === null || password === '' || password === null) {
            setError("Email and password can't be epmty");
        }
        else {
            for (let index in users) {
                if (users[index].email === email && users[index].password === password) {
                    console.log('login');
                    const tempKey = users[index].id;
                    window.localStorage.setItem('loginKey', tempKey);
                    window.location.href = "todo-list";
                    return;
                }
                else {
                    console.log('invalid email or password');
                    setError('invalid email or password');
                }
            }
            setError("user doesn't exit");
        }
    }
    return (
        <>
            <div className='h-screen bg-zinc-800 text-white'>
                <div className='flex justify-center '>
                    <h1 className='text-blue-500 text-4xl mt-20 pt-16 font-semibold'>Log in</h1>
                </div>
                <div className='my-5 h-20 space-y-2 flex justify-center items-center flex-col'>
                    <label htmlFor='email' className='block text-xl w-1/4 m-auto flex pl-2 max-[640px]:w-1/2 max-[640px]:text-lg'>
                        Email
                    </label>
                    <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}
                        className='rounded-md w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium block focus:outline-none focus:border-blue-600 focus:ring-1  focus:ring-blue-600 invalid:border-red-600 border invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-600'
                        placeholder='Email Address'
                        required />
                </div>
                <div className='my-3  h-20 space-y-2 flex justify-center items-center flex-col'>
                    <label htmlFor='password' className='block text-xl w-1/4 m-auto flex pl-2 max-[640px]:w-1/2 max-[640px]:text-lg'>
                        Password
                    </label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}
                        className='rounded-md w-80 h-8 border-0 text-gray-950 px-2 text-sm font-medium focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 invalid:border-red-600 border  invalid:text-red-600 focus:invalid:border-red-600 focus:invalid:ring-red-500'
                        placeholder='Password' />
                </div>
                <div className='flex justify-center items-center flex-col'>
                    {error ? <span className='text-red-600'>{error}</span>
                        : null}
                    <button onClick={handleSignIn}
                        className='bg-blue-500 rounded w-1/5 h-8 text-lg font-medium max-[640px]:w-1/2'>
                        Log In
                    </button>
                    <p className='mt-2'>You don't have an accout? <Link to={'/'}><span className='underline'>Sign Up</span></Link></p>
                </div>
            </div>
        </>
    )
}

export default SignIn;
