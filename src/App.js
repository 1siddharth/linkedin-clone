import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import WelcomeSection from './Components/WelcomeSection';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/signup';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<WelcomeSection/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path = "/signup" element={<Signup/>}/> 
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
