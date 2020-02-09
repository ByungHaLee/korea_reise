import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./Navigation.css";
import Navbar from 'react-bootstrap/Navbar';

class Navigation extends React.Component {
    
    render() {
       
        const {location:{pathname}} = this.props;
        return (
            pathname === "/" 
            ? <span></span> 
            :
            <Navbar fixed="top">
                <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Link to="/spot">Spot</Link>
                    <Link to="/hotel">Hotel</Link>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

//export default Navigation;
export default withRouter(Navigation);