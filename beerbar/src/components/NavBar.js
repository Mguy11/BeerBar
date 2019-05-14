import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



export default class NavBar extends Component {

    render() {
        return (
            <Navbar bg="light" variant="light" sticky="top">
                <Navbar.Brand href="#home">BeerBar</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#About">About</Nav.Link>
                <Nav.Link href="#Menu">Menu</Nav.Link>
                <Nav.Link href="#Maps">Maps</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}