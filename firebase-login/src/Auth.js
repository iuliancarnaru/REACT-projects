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
      
    handleSubmit = event => {
        // e.preventDefault();
        // this.setState({ 
        //     email: this.emailInput.value,
        //     password: this.passwordInput.value
        // });
    };
    
    handleLogin = event => {
        event.preventDefault();
        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        const auth = firebase.auth();
        auth.signInWithEmailAndPassword(email, password)
            .then()
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
                console.log(user);
                const message = `Welcome ${email}`;
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

    


    render() {
        return (
        <div>
            <h1>Welcome to our page!</h1>
            <p className={this.state.error ? 'p' : 'hide'}>{this.state.error}</p>
            <p className={this.state.message ? 'p' : 'hide'}>{this.state.message}</p>
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
