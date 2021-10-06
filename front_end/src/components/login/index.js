import React from 'react'
import "./login.css"

function Login() {
    return (
        <>
        <form action ="#" className="login-form">
        <h1>Sign In</h1>
        <div className="textb">
            <input type="text" required/>
            <div className="placeholder">Username</div>
        </div>

        <div className="textb">
            <input type="password" required/>
            <div className="placeholder">Password</div>
            <div className="show-password fas fa-eye-slash"></div>
        </div>

        <div className="checkbox">
            <input type="checkbox"/>
            <div className="fas fa-check"></div>
            Stay signed in
            </div>


        <button className="btn fas fa-arrow-right" disabled></button>
        <a href="#">Can't sign in?</a>
        <a href="#">Create Account?</a>
    </form>
    </>
    )
}

export default Login