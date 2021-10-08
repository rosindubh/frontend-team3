import React from "react";

const Login = ({setPass, setEmail, loginHandler}) => {

    return(
        <form onSubmit={loginHandler}>
        <h1>Login</h1>
        <input placeholder='email' onChange={(e) => setEmail(e.target.value) } />
        <input placeholder='password' onChange={(e) => setPass(e.target.value)}  />
        <button type='submit'>Login</button>
      </form>
    )
}

export default Login; 