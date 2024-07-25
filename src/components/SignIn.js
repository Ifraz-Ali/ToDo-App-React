import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UITodo from './UITodo';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isLogin, setIsLogin] = useState(false);


    const users = JSON.parse(localStorage.getItem("userid"));
    const handleSignIn = () => {
        for (let index in users) {
            if (users[index].email === email && users[index].password === password) {
                console.log('login');
                const tempKey = users[index].id;
                const tempName = users[index].userName;
                window.localStorage.setItem('loginKey', tempKey);
            }
            else {
                console.log('invalid email or password');
            }
        }
    }
    return (
        <div>
                <h1>Sign In</h1>
                <div>
                    Email: <input type='email' id='email' name='signup' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    Password: <input type='password' id='password' name='signup' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Link to={'/todo-list'}><button onClick={handleSignIn}>Sign In</button></Link>
                <p>I don't have an accout <Link to={'/'}><span>Sign Up</span></Link></p>
            
        </div>
    )
}

export default SignIn;
