import React from "react";
import "./styles/WelcomeSection.css";


const WelcomeSection = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-text">
                <div>
                    <p className="welcome-title">
                        Welcome to your professional community
                    </p>
                </div>
                <div className="welcome-navigation">
                    <div className="content">
                        <p>
                            Search for a job
                        </p>
                        <div></div>
                    </div>
                    <div className="content">
                        <p>
                            Find a person you know
                        </p>
                        <div></div>
                    </div>
                    <div className="content">
                        <p>
                            Learn a new skill
                        </p>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="welcome-greeting" >
                 <img  src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg" alt="Welcome Greeting!"></img>

            </div>
        </div>
    )
}


export default WelcomeSection;