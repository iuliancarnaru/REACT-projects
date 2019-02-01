import React, { Component } from 'react'
import firebase from 'firebase/app';
import uuid from 'uuid';

var config = {
  apiKey: "AIzaSyA6S4l4DKNMonzcWiPhUSggfi5B8fqAScw",
  authDomain: "u-survey-e3e4c.firebaseapp.com",
  databaseURL: "https://u-survey-e3e4c.firebaseio.com",
  projectId: "u-survey-e3e4c",
  storageBucket: "u-survey-e3e4c.appspot.com",
  messagingSenderId: "717212915550"
};

firebase.initializeApp(config);


class Survey extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          id: uuid.v1(),
          studentName: '',
          answers: {
            ans1: '',
            ans2: '',
            ans3: ''
          },
          isSubmited: false
        }
      }

      nameSubmit = (event) => {
        var studentName = this.refs.name.value;
        this.setState({
            studentName
        }, () => {
            console.log(this.state)
        })
      }


    render() {

    var studentName;
    var questions;

    if (this.state.studentName === '' && this.state.isSubmited === false) {
        studentName = <div>
            <h1>Hey student please let us your name</h1>
            <form onSubmit={this.nameSubmit}>
                <input className="name-input" type="text" placeholder="Enter your name" ref="name"/>
            </form>
        </div>;
        questions = null;
    } else if (this.state.studentName !== '' && this.state.isSubmited === false) {
        studentName = <h1>Welcome to our survey, {this.state.studentName}!</h1>
        questions = <p>Hey</p>
    }

    return (
      <div>
        {studentName}
        ----------------------------
        {questions}
      </div>
    )
  }
}

export default Survey;

