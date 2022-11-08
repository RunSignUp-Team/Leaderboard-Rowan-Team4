import React from 'react';
import logo from '../runsignup_logo.png';
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

        
        </>
        
    );
}

export default Home;