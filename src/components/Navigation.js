import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar'

function Navigation (){
    return (
        <Navbar sticky="top">
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Link to="/spot">Spot</Link>
                <Link to="/hotel">Hotel</Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;