import React from 'react';
import logo from '../runsignup_logo.png';
<<<<<<< HEAD
import '../App.css';
import  Dropdown  from '../Components/races-dropdown.js'
import { Reset } from '../Components/resetButton.js'
import SubmitButton from '../Components/page1Submit.js'
import { Populate } from '../Components/populateButton.js';

function Home() {
    return (
        <><div className="App">
        <header className="App-header">
          <br></br><br></br><br></br>
          <img src={logo} className="App-logo" alt="logo" />
          <br></br><br></br><br></br>
  
          <div id="submit form">
            <form method="POST" action="index.html">
              <center>
                <Dropdown />
                <br />
                <br />
  
              </center>
              <SubmitButton />
              
              <Populate />
              <br />
              <Reset />
  
            </form>
  
          </div>
  
  
        </header>
      </div>
        </>    );
=======
import  Dropdown  from '../Components/races-dropdown.js'
import { Populate } from '../Components/populateButton.js';
import { Reset } from '../Components/resetButton.js'
import SubmitButton from '../Components/page1Submit.js'


function Home() {
    return (
       <>
       <center>
        <h1>Welcome to the RSU Home Page</h1>
        <br></br>
        <img src={logo} alt="Logo" />
        <br></br>
        <Dropdown />
              <br />
              <br />
        <SubmitButton />
        <br />
            <Populate />
            <br />
            <Reset />

        </center>

        <br />
        <br />
        </>
        
    );
>>>>>>> 4215cc017e261b19f24ab0d6089170add042242d
}

export default Home;