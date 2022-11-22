import React, { Component } from "react";
import logo from '../runsignup_logo.png';
import image from '../PinkArrow.png';
import '../App.css';
import Table from '../Components/Page3/Table.js'
import Update from '../Components/Page3/Update';
import {Font} from '../Components/Page3/Font';
import ScrollTop from '../Components/Page3/ScrollTop';
import ScrollBottom from '../Components/Page3/ScrollBottom';


console.log(logo);

function Page3() {
    return (
        <>
        <a href="/Page2"> <img src={image} className="BackArrow" alt="Pink Arrow" /> </a>
        <div className="page3format">
       
        <center>
        <h1>Welcome to Page 3 of the RSU Application</h1>
        </center>
        
        <Font />
        <Table />
        <Update />
        <ScrollTop />
        <ScrollBottom />
        </div>
        </>
        
    );
     
    
}

export default Page3;

