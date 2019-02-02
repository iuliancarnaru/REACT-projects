import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand href="#home">GitHub searcher</Navbar.Brand>
                <Button onClick={this.props.handleLogin} variant="outline-success">Login</Button>
            </Navbar>
        </div>
    )
  }
}

export default Header;
