import React, { Component } from 'react';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Auth0Lock from 'auth0-lock';
import Github from './components/Github';
import Header from './components/Header';


class App extends Component {

  componentDidMount() {
    this.lock = new Auth0Lock('UFGgxImj4heaE9oumR7qz9xtv1W2ajv1','iuliancarnaru.eu.auth0.com');
    this.lock.on('authenticated', (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          console.log(error);
          return;
        }

        document.getElementById('nick').textContent = profile.nickname;

        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));
      });
    })
  }

  handleLogin = () => {
    this.lock.show();
  }
  
  render() {
    return (
      <div className="App">
        <Header handleLogin={this.handleLogin}/>
        <h2>Welcome <span id="nick" className="nickname"></span></h2>
        <Github />
      </div>
    );
  }
}

export default App;
