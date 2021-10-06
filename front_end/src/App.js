import './App.css';
import React, {useState} from "react";
import { fetchRequest, login } from './utils';
import { Login } from "./components/login"
import { SignUp } from './components/signup';


const App = ()=> {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState();

const submitHandler = (e) => {
  e.preventDefault();
  //call fetch request for creating user
  setData(fetchRequest(userName, email, pass, setData));
};

const loginHandler = (e) => {
  e.preventDefault();
  login(email, pass, setData);
};

return (
  <div className = "App">
    <div className = "sign-in">
    <div>
      <h3>Sign Up</h3>
    <SignUp setUserName={setUserName} setEmail={setEmail} setPass={setPass} submitHandler={submitHandler} />
    </div>
    <div>
      <h3>Login</h3>
    <Login setPass={setPass} setEmail={setEmail} loginHandler={loginHandler} />
    </div>
    </div>
    <h4>{data ? data.name: 'No User Logged In'}</h4>
  </div>
  )
};



export default App;
