import React, { useState } from 'react';

export function LoginSection({ isLoginMode, doLogin, flexStyle }) {
    const logoSrc = require('../../assets/imgs/strhat.png')
    const [loginCred, setLoginCred] = useState({ email: '', password: '' })
    const [msg, setMsg] = useState('')

    const loginHandleChange = ev => {
        const { name, value } = ev.target;
        setLoginCred(prevState => ({ ...prevState, [name]: value }))
    }
    const login = ev => {
        ev.preventDefault()
        const { email, password } = loginCred
        if (!email || !password) return setMsg('*All inputs are required!')
        doLogin(loginCred)
    }
    return (
        <section className={`login-container ${flexStyle} ${!isLoginMode && ' hidden'}`} >
            <form onSubmit={login}>
                <img src={logoSrc} alt="Tasko logo" />
                <h1>{isLoginMode ? 'Log in to Tasko' : 'Sign up to Tasko'}</h1>
                <input
                    type="email"
                    name="email"
                    value={loginCred.email}
                    onChange={loginHandleChange}
                    placeholder="Email"
                    autoComplete="off"
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={loginCred.password}
                    onChange={loginHandleChange}
                    placeholder="Password"
                    autoComplete="off"
                />
                <button className="login-signup-btn">Login</button>
            </form>
            <p>{msg}</p>
        </section>
    )
}