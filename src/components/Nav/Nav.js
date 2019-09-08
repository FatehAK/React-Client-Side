import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends React.Component {
    render() {
        return (
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export default Nav;
