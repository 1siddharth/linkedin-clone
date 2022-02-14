import React from "react";
import "./styles/NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="nav-bar">
            <img className="logo" src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2003.png"
            alt="LinkedIn"></img>

            <div className="primary-btn">
            <Link to = "/signup">
                 <button className="join-btn"> 
                 
                    Join Now
                    
                </button>
                </Link>
                
                <Link to ="/signin">
                <button className="signin-btn"> 
                Sign in
                </button>
                </Link>
                
                
            </div>
        </div>
 
    );
}

export default NavBar;
