import React from "react";
import "./styles/signup.css"
const Signup = ()=>{
return(
    <div className="signup-body">
        <p>Join LinkedIn now -- it's Free! </p>
        <div className="box-style">
        <div className="email-box">
            Email or phone number
            <input type="email"></input>
        </div>
        <div className="name-box">
            Your Name
            <input type="name"></input>
        </div>
        <div className="password-box">
            Password (6 or more characters)
            <input type="password"></input>
        </div>
            <button type="submit">Continue</button>
        </div>
    </div>
)
    



}

export default Signup;