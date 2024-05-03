import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Kiwii</h1>
            </div>
            <div className="navbar-links">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className="navbar-buttons">
                <button className="btn-signup">Sign Up</button>
                <button className="btn-login">Login</button>
            </div>
        </nav>
    </header>
  );
};

export default Header;
