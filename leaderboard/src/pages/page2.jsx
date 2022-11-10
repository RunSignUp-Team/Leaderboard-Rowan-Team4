import React, { Component } from 'react';
import '../App.css';
import Checkboxes from '../Components/Page2/Checkboxes'
import Body from '../Components/Page2/Body'
import Header from '../Components/Page2/Header'
import Navigation from '../Components/Page2/Navigation'

function Page2 () {
 
    return (
      <><div className="App">
        <Navigation />
        <br>
        </br>
        <Header />
        <br>
        </br>
        <Body />
        <Checkboxes />
      </div>
      </>
    );
  
  
}
export default Page2;
