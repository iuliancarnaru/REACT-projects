import React, { Component } from 'react'
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

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
        password: '',
        error:'',
        message: ''
    }

    clearInput = () => {
        this.emailInput.value = '';
        this.passwordInput.value = '';
    }

    
    handleLogin = event => {
        event.preventDefault();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        const auth = firebase.auth(); //returns a promise
        auth.signInWithEmailAndPassword(email, password)
            .then( user => {
                const logout = document.getElementById('logout');
                logout.classList.remove('hide');
                const register = document.getElementById('register');
                register.classList.add('hide');
                const login = document.getElementById('login');
                login.classList.add('hide');


                const message = `Welcome back ${email}`;
                this.setState({
                    message,
                    error: ''
                })

                this.clearInput();
            })
            .catch( e => {
                const error = e.message;
                this.setState({
                    error
                });
        })
    }

    handleRegister = event => {
        event.preventDefault();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        const auth = firebase.auth();
        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {

                const message = `Thank you for registering with us ${email}`;
                firebase.database().ref(`users/${user.user.uid}`).set({
                    email
                })
                this.setState({
                    error: '',
                    message
                })

            })
            .catch(e => {
                const error = e.message;
                this.setState({
                    error
                });
            })
    }

    handleLogout = event => {
        firebase.auth().signOut();
        const logout = document.getElementById('logout');
        logout.classList.add('hide');
        const message = `See you soon... Have a nice day!`;
        this.setState({
            message
        });
    }


    render() {
        return (
        <div>
            <h1>Welcome to our page!</h1>
            <p className={this.state.error ? 'p' : 'hide'}>{this.state.error}</p>
            <p className={this.state.message ? 'p' : 'hide'}>{this.state.message}</p>
            <form onSubmit={this.handleSubmit}>
                <input type="email" ref={element => this.emailInput = element} /><br />
                <input type="password" ref={element => this.passwordInput = element} /><br />
                    <button id="login" onClick={this.handleLogin}>Login</button>
                    <button id="logout" className="hide" onClick={this.handleLogout}>Logout</button>
                    <button id="register" onClick={this.handleRegister}>Register</button>
            </form>
        </div>
        )
    }
}

export default Auth;
