import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

const SignUp = () => {
    const { v4: uuidv4 } = require('uuid');
    // console.log(uuidv4());
    const [userId, setUserId] = useState(uuidv4());
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [users, setUsers] = useState([]);


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
        // console.log(user);
        users.push(user)
        console.log(users);
        setUsers(users);
        window.localStorage.setItem("userid", JSON.stringify(users));
    }

    const handleChange = (e) => {
        if (e.target.checked) {
            setGender(e.target.value);
        }
    }

    return (
        <>
            <h1>Sign Up</h1>
            <div>
                Full Name: <input type='text' id='fullname' name='fullname' value={userName} onChange={(e) => setUserName(e.target.value)} required/>
            </div>
            <div>
                Email: <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
                Create Password: <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div>Gender:
                Male: <input type='radio' name='gender' value={'male'} onChange={handleChange} />
                Female: <input type='radio' name='gender' value={'female'} onChange={handleChange} />
            </div>
            <Link to='/login' ><button onClick={handleSignUp}>Sign Up</button></Link>
            
            <p>Already Registered? <Link to={'/login'}><span>Log in</span></Link> </p>
        </>
    )
}

export default SignUp