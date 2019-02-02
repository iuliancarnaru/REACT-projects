import React, { Component } from 'react';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Auth0Lock from 'auth0-lock';
import Github from './components/Github';
import Header from './components/Header';


class App extends Component {

  state = {
    accessToken: '',
    profile:''
  }

  componentWillMount() {
    this.lock = new Auth0Lock('UFGgxImj4heaE9oumR7qz9xtv1W2ajv1','iuliancarnaru.eu.auth0.com');
    this.lock.on('authenticated', (authResult) => {
      this.lock.getUserInfo(authResult.accessToken, function(error, profile) {
        if (error) {
          console.log(error);
          return;
        }

        localStorage.setItem('accessToken', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile));

      });

    });

    this.getProfile();
  }

  getProfile = () => {
    if(localStorage.getItem('accessToken') !== null) {
      this.setState({
        accessToken: localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      })
    }
  }

  handleLogin = () => {
    this.lock.show();
  }

  handleLogout = () => {
    this.setState({
      accessToken: '',
      profile: ''
    }, () => {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('profile')
    })


  }
  
  render() {

    let gitty;

    if(this.state.accessToken) {
      gitty = <Github profile={this.state.profile}/>
    } else {
      gitty = "Click on login to view Github viewer"
    }
    
    return (
      <div className="App">
        <Header 
            lock={this.lock}
            accessToken={this.state.accessToken}
            handleLogin={this.handleLogin} 
            handleLogout={this.handleLogout}
        />
        {gitty}
      </div>
    );
  }
}

export default App;
