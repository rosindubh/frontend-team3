import './App.css';
import React, {useState} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchRequest, login } from './utils';
import { Login } from "./components/login"
import { SignUp } from './components/signUp';
import Homepage from './components/homepage';
// import { Homepage } from "./components/homepage"

const App = ()=> {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [data, setData] = useState();
  // const [arr, SetArr] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    //call fetch request for creating user
  setData(fetchRequest(userName, email, pass, setData));

  };

  const loginHandler = (e) => {
    e.preventDefault();
    login(email, pass, setData);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <div>
      <h1>Sign Up</h1>
      <SignUp setUserName={setUserName} setEmail={setEmail} setPass={setPass} submitHandler={submitHandler} />
      <h1>Login</h1>
      <Login setPass={setPass} setEmail={setEmail} loginHandler={loginHandler} />
      <h1>{data ? data.name: 'No User Logged In'}</h1>
    </div>
    <div className="content">
    <Switch>
      <Route path="/dashboard" component={Homepage} />
    </Switch>
  </div>
</div>
</BrowserRouter>
</div>
  );
}

export default App;
