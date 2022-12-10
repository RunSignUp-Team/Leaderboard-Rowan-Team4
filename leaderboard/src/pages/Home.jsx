import React from 'react';
import logo from '../Images/runsignup_logo.png';
import '../CSS/App.css';
import  Dropdown  from '../Components/Page1/races-dropdown.js'

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
              <br />
  
            </form>
  
          </div>
  
  
        </header>
      </div>
        </>    );
}

export default Home;