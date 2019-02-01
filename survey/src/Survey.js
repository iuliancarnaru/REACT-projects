import React, { Component } from 'react'
import firebase from 'firebase/app';
import uuid from 'uuid';

var config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
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

      asnwerSelected = (event) => {
        var answers = this.state.answers;
        if(event.target.name === 'ans1') {
            answers.ans1 = event.target.value
        } else if(event.target.name === 'ans2') {
            answers.ans2 = event.target.value
        } else if(event.target.name === 'ans3') {
            answers.ans3 = event.target.value
        }

        this.setState({
            answers
        }, () => {
            console.log(this.state)
        })
      }

      questionsSubmit = () => {

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
        questions = <div>
            <h2>Here are some questions</h2>
            <form onSubmit={this.questionsSubmit}>
                <div className="card">
                    <label>What kind of courses you like the most: </label><br />
                    <input type="radio" name="ans1" value="Technology" onChange={this.asnwerSelected}/>Technology
                    <input type="radio" name="ans1" value="Design" onChange={this.asnwerSelected}/>Design
                    <input type="radio" name="ans1" value="Marketing" onChange={this.asnwerSelected}/>Marketing
                </div>
                <div className="card">
                    <label>You are a: </label><br />
                    <input type="radio" name="ans2" value="Student" onChange={this.asnwerSelected}/>Student
                    <input type="radio" name="ans2" value="Employed" onChange={this.asnwerSelected}/>Employed
                    <input type="radio" name="ans2" value="Freelancer" onChange={this.asnwerSelected}/>Freelancer
                </div>
                <div className="card">
                    <label>Is online learning helpful: </label><br />
                    <input type="radio" name="ans3" value="yes" onChange={this.asnwerSelected}/>Yes
                    <input type="radio" name="ans3" value="no" onChange={this.asnwerSelected}/>No
                    <input type="radio" name="ans3" value="more-time" onChange={this.asnwerSelected}/>I need more time
                </div>

                <input className="feedback-button" type="submit" value="submit"/>
            </form>
        </div>
    } else if (this.state.isSubmited === true && this.state.studentName) {
        studentName = <h1>
            Thanks, {this.state.studentName}! Have a nice day!
        </h1>
    }

    return (
      <div>
        {studentName}
        {questions}
      </div>
    )
  }
}

export default Survey;

