import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

class Header extends Component {
  render() {
      let button;

      if(this.props.accessToken) {
        button = <Button onClick={this.props.handleLogout} variant="outline-success">Logout</Button>
      } else {
        button = <Button onClick={this.props.handleLogin} variant="outline-success">Login</Button>
      }
        return (
            <div>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">GitHub searcher</Navbar.Brand>
                    { button }
                </Navbar>
            </div>
        )
  }
}

export default Header;
