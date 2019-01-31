import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
