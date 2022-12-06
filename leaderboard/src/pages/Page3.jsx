import React, { Component } from "react";
import logo from '../runsignup_logo.png';
import image from '../PinkArrow.png';
import '../App.css';
import Table from '../Components/Page3/Table.js'
import Update from '../Components/Page3/Update';
import {Font} from '../Components/Page3/Font';
import ScrollTop from '../Components/Page3/ScrollTop';
import AutoScroll from '../Components/Page3/AutoScroll';
import SlowScroll from '../Components/Page3/SlowScroll';
import JumpTop from '../Components/Page3/JumpTop';


console.log(logo);

function Page3() {
    return (
        <>
        <a href="/Page2"> <img src={image} className="BackArrow" alt="Pink Arrow" /> </a>
        <div className="page3format">

        <center>
        <div class ="scrollable">
        <div class ="content">
            </div>
        </div>
    </center>
        
        

        <center>
        <h1><u>Race Results LeaderBoard</u></h1>
        </center>

        <Table />
        
        <Update />
        <SlowScroll />

        <ScrollTop />
        <JumpTop />
        
        </div>
        </>
        
    );
     
    
}

export default Page3;

