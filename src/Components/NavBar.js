import React from "react";
import "./styles/NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <img className="logo" src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2003.png"
            alt="LinkedIn"></img>

            <div className="primary-btn">
                 <button className="join-btn"> 
                    Join Now
                </button>
                <button className="signin-btn"> Sign in</button>
                
            </div>
        </div>
 
    );
}

export default NavBar;
