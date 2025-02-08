import React from "react";
import './Nav.css';

const Nav = () =>{
    return(
        <>
         <nav>
                <ul className="nav-bar">
                    <li className="logo">🏏 Cricket</li>
                    <input type="checkbox" id="check"/>
                    <span className="menu">
    
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Scores</a></li>
                        <li><a href="#">Round Setter</a></li>
                        <li><a href="#">Awards</a></li>
                        <label for="check" className="close-menu"><i className="fas fa-times"></i></label>
                    </span> 
                    <label for="check" className="open-menu"><i className="fas fa-bars"></i></label>
                    <div className="cta-btn">
                        <div>rerer</div>
                        <div>rerer</div>
                    </div>
    
                </ul>
            </nav>
        </>
    )
}

export default Nav