import React, { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home'
import { Switch, Route, useHistory } from 'react-router-dom';
import Navigation from './components/Navigation';
import Particles from 'react-particles-js';
import Register from './pages/Register/Register';

function App() {
  const particalesOptions = {
    particles: {
      line_linked: {
        shadow: {
          enable: true,
          color: "#3ca901",
          blur: 5
        }
      }
    }
  }
  let history = useHistory();
  const [logIn, setLogIn] = useState(false);
  const onLogInSuccess = () => {
    setLogIn(true);
    history.push('/')
  }
  const onClickSignOut = () => {
    setLogIn(false);
  }
  return (
    <div className="App">

      <Particles className="particles" params={particalesOptions} />
      <Navigation logIn={logIn} onClickSignOut={onClickSignOut} />
      <Switch>
        <Route path='/' exact>
          <Home logIn={logIn} />
        </Route>
        <Route path='/signIn' exact >
          <SignIn onLogInSuccess={onLogInSuccess} />
        </Route>
        <Route path='/register' exact>
          <Register onLogInSuccess={onLogInSuccess} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
