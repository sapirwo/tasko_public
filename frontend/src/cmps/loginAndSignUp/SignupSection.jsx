import React, { useState } from 'react';

export function SignupSection({ doSignup, isLoginMode, flexStyle }) {
    const logoSrc = require('../../assets/imgs/strhat.png')
    const [signupCred, setSignupCred] = useState({ email: '', password: '', username: '' })
    const [msg, setMsg] = useState('')

    const signupHandleChange = ev => {
        const { name, value } = ev.target;
        setSignupCred(prevState => ({ ...prevState, [name]: value }));
    };
    const signup = ev => {
        ev.preventDefault()
        const { email, password, username } = signupCred
        if (!email || !password || !username) return setMsg('*All inputs are required!')
        doSignup(signupCred)
    }

    return (
        <section className={`signup-container ${flexStyle} ${isLoginMode && ' hidden'}`}>
            <img src={logoSrc} alt="Tasko logo" />
            <h1>{isLoginMode ? 'Log in to Tasko' : 'Sign up to Tasko'}</h1>
            <form onSubmit={signup}>
                <input
                    type="email"
                    name="email"
                    value={signupCred.email}
                    onChange={signupHandleChange}
                    placeholder="Email"
                    autoComplete="off"
                    required
                />
                <input
                    name="password"
                    type="password"
                    value={signupCred.password}
                    onChange={signupHandleChange}
                    placeholder="Password"
                    autoComplete="off"
                />
                <input
                    type="text"
                    name="username"
                    value={signupCred.username}
                    onChange={signupHandleChange}
                    placeholder="Username"
                    autoComplete="off"
                />
                <button className="login-signup-btn">Sign Up</button>
            </form>
            <p>{msg}</p>
        </section >

    )
}