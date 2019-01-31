import React, { Component } from 'react';
import './App.css';
import CourseSales from './CourseSales';

class App extends Component {
  render() {
    let courses = [
      {
        name: 'Complete React Course',
        price: 100
      },
      {
        name: 'Complete Redux Course',
        price: 150
      },
      {
        name: 'Complete React-Redux Course',
        price: 250
      }
    ];
    return (
      <div className="App">
          <h1>Purchase Page</h1>
          <CourseSales courses={courses}/>
      </div>
    );
  }
}

export default App;
