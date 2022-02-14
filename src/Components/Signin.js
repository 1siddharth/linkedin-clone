import React from "react";
import "./styles/Signin.css";
const Signin = ()=>{
    return (
        <div className="box-container">
            <div className="signin-box">
                <h1>Sign in</h1>
                <p>Stay updated on your profesional world!</p>
                <div className="user-inputs">
                    <input type= "username" placeholder="Email or Phone"></input>
                    <input type ="password" placeholder="Password"></input>
                </div>
                
                <div className="forgot-password">Forgot Password?</div>
                <button type="submit"> 
                    Sign in
                </button>
            </div>
            
        </div>
    )


}

export default Signin;