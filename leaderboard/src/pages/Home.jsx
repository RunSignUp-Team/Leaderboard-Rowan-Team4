import React from 'react';
import logo from '../Images/runsignup_logo.png';
import '../CSS/App.css';
import  Dropdown  from '../Components/Page1/races-dropdown.js'
import { Reset } from '../Components/Page1/resetButton.js'
import { Populate } from '../Components/Page1/populateButton.js';

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
  
              </center>              
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