import React from 'react';
import logo from '../images/daas-logo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MainNavbar = () => {

    return(
        <Navbar bg="white">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Brand href="/">
                DaaS
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-sm-2">
                <Nav.Link href='/create'>CREATE</Nav.Link>
                <Nav.Link href='/rest-api'>REST API</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default MainNavbar;