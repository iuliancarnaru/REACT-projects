import React, { Component } from 'react'

const firebase = require('firebase/app');
require("firebase/database");


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);


class Auth extends Component {
    state = {
        email: '',
        password: ''
    }
      
    handleSubmit = event => {
        // e.preventDefault();
        // this.setState({ 
        //     email: this.emailInput.value,
        //     password: this.passwordInput.value
        // });
    };
    
    handleLogin = event => {
        const email = this.emailInput.value;
        const password = this.passwordInput.value;
        console.log(email, password);
    }


    render() {
        return (
        <div>
            <h1>Welcome to our page!</h1>

            <form onSubmit={this.handleSubmit}>
                <input type="email" ref={element => this.emailInput = element} /><br />
                <input type="password" ref={element => this.passwordInput = element} /><br />
                <button onClick={this.handleLogin}>Login</button>
                <button onClick={this.handleLogout}>Logout</button>
                <button onClick={this.handleRegister}>Register</button>
            </form>
        </div>
        )
    }
}

export default Auth;
