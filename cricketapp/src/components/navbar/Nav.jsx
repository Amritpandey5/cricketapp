import React from "react";
import './Nav.css';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <header className="nav-container">
                <nav>
                    <ul className="nav-bar">
                        <li className="user-logo" aria-label="User Logo">A</li>
                        <li className="logo" aria-label="CricketBet Logo">🏏CricketBet</li>
                        <input type="checkbox" id="check" />
                        <span className="menu">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/series">Series</NavLink></li>
                            <li><NavLink to="/roundsetter">RoundSetter</NavLink></li>
                            <li><NavLink to="/rewards">Rewards</NavLink></li>
                            <label htmlFor="check" className="close-menu" aria-label="Close Menu">
                                <i className="fas fa-times"></i>
                            </label>
                        </span>
                        <label htmlFor="check" className="open-menu" aria-label="Open Menu">
                            <i className="fas fa-bars"></i>
                        </label>
                        <div className="cta-btn">
                            <button className="login" aria-label="Login">Login</button>
                            <button className="login" aria-label="Sign Up">Sign Up</button>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Nav;