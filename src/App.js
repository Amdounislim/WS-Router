
import React, { useState } from "react"
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Users from './Components/Users/Users'
import Navbar from './Components/NavBar/Navbar';
import User from "./Components/User/User"
import PrivateRoute from './Components/PrivateRoute';
import Admin from './Components/Admin';

import errorImage from './Assets/404.jpg'

function App() {

  const [isAuth, setIsAuth] = useState(false)
  const login =()=>setIsAuth(true)
  const logout =()=>setIsAuth(false)

  return (
    <div className="App" >
      <Navbar isAuth={isAuth} login={login} logout={logout} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route path="/users/user/:id" component={User} />
        <PrivateRoute path="/admin" component={Admin} isAuth={isAuth} />
        <Route path="/*" render={()=><img src={errorImage} alt="notfound"/>} />
      </Switch>
    </div>
  );
}

export default App;
