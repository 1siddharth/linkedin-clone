import React from "react";
import {BsLinkedin ,BsFillChatLeftTextFill,BsBellFill} from 'react-icons/bs';
import {TiHome} from 'react-icons/ti';
import {MdPeopleAlt} from 'react-icons/md';
import {FaSuitcase} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import {HiOutlineDotsCircleHorizontal} from 'react-icons/hi';
import {AiOutlineSearch} from 'react-icons/ai';

import "./styles/NavBarDashboard.css";

const NavBarDashboard = () =>{
    return (
        <div id="navbar">
            <div className="nav-sections">
                <div id="logo">
                    <BsLinkedin />
                </div>
                <div id="search-bar">
                < AiOutlineSearch  /> 
                   <input placeholder="Search">
                   
                   </input>
                     
                </div>         
            </div> 
            <div className="nav-sections">
                <div className="nav-item">
                    <TiHome/>
                    <p>Home</p>
                </div>
                <div className="nav-item">
                    <MdPeopleAlt/>
                    <p>My Network</p>
                </div>
                <div className="nav-item">
                    <FaSuitcase />
                    <p>Jobs</p>
                </div>
                <div className="nav-item">
                    <BsFillChatLeftTextFill />
                    <p>Messaging</p>
                </div>
                <div className="nav-item">
                    <BsBellFill />
                    <p>Notifications</p>
                </div>
                <div className="nav-item">
                    <CgProfile />
                    <p>Me</p>
                </div>
                <div className="nav-item">
                    <HiOutlineDotsCircleHorizontal />
                    <p>Work</p>
                </div>

                
            </div>

        </div>
    )
}

export default NavBarDashboard;