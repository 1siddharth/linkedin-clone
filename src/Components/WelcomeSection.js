import React from "react";
import "./styles/WelcomeSection.css";


const WelcomeSection = () => {
    return (
        <div className="welcome-section">
            <div className="welcome-text">
                <div>
                    <h2>
                        Welcome to your professional community
                    </h2>
                </div>
                <div>
                    <div>
                        <p>
                            Search for a job
                        </p>

                    </div>
                    <div>
                        <p>
                            Find a person you know
                        </p>
                    </div>
                    <div>
                        <p>
                            Learn a new skill
                        </p>
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