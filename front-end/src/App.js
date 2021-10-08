import "./App.css";
import React, {useState} from "react";
import { BrowserRouter, Switch, Route, Redirect, useHistory } from "react-router-dom";
import { fetchRequest, login } from "./utils";
import Navbar from "./components/navbar";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Homepage from "./components/homepage";

const App = ()=> {
  const history = useHistory();
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
    history.push("/");
  }


  return (
    <>
 
    <div className="App">
      <Navbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/signup">
        <SignUp setUserName={setUserName} setEmail={setEmail} setPass={setPass} submitHandler={submitHandler} />
      </Route>
      <Route path="/login">
        <Login setPass={setPass} setEmail={setEmail} loginHandler={loginHandler} />
        </Route>
      </Switch>
     </div>
</>
  );
}

export default App;