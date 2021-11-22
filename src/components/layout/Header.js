import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>
            <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/entertainment">Fun!!!</Link></li>                       
                    <li><Link to="/about-us">About</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default Header
