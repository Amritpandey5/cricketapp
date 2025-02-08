import React from "react";
import './Nav.css';

const Nav = () =>{
    return(
        <>
       <header className="nav-container">
            <nav>
                <ul className="nav-bar">
                <li className="logo">🏏Cricket</li>
                <input type="checkbox" id="check" />
                <span className="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Scores</a></li>
                    <li><a href="#">RoundSetter</a></li>
                    <li><a href="#">Awards</a></li>
                    <label for="check" className="close-menu" aria-label="Close Menu">
                    <i className="fas fa-times"></i>
                    </label>
                </span> 
                <label for="check" className="open-menu" aria-label="Open Menu">
                    <i className="fas fa-bars"></i>
                </label>
                <div className="cta-btn">
                    <div className="login">Login</div>
                    <div className="login">Sign Up</div>
                </div>
                </ul>
            </nav>
</header>

        </>
    )
}

export default Nav;