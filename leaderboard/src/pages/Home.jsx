import React from 'react';
import logo from '../runsignup_logo.png';
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
}

export default Home;