import React from 'react'

const SignUp = ({setUserName, setEmail, setPass, submitHandler}) => {
    return(
        <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <input placeholder="UserName" onChange={(e)=> setUserName(e.target.value)} />
        <input placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
        <input placeholder="Password" type='password' onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Submit</button>
          </form>
    )
}

export default SignUp;