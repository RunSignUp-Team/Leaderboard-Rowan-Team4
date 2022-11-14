import React from 'react';
import logo from '../runsignup_logo.png';
import image from '../PinkArrow.png';
import '../App.css';
import Table from '../Components/Page3/Table.js'

console.log(logo);

function Page3() {
    return (
        <>
        <a href="/Page2"> <img src={image} className="BackArrow" alt="Pink Arrow" /> </a>
        <div className="page3format">
        
        <center>
        <h1>Welcome to Page 3 of the RSU Application</h1>
        <h2>Here you will find a table with the race results.</h2>
        </center>

        <Table />
        
        </div>

        
        </>
        
    );
     
    
}

export default Page3;