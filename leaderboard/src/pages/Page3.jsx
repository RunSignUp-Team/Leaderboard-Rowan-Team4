import React, { useEffect, useState, useRef } from "react";
import image from '../Images/PinkArrow.png'
import '../CSS/App.css';
import Table from '../Components/Page3/Table.js'
import Update from '../Components/Page3/Update';
import ScrollTop from '../Components/Page3/ScrollTop';
import SlowScroll from '../Components/Page3/SlowScroll';
import JumpTop from '../Components/Page3/JumpTop';
import Back from "../Components/Page3/Back";


function Page3() {

    return (
        <>
        <a href="/Page2"> <img src={image} className="BackArrow" alt="Pink Arrow" /> </a>
        <div className="page3format">

        
        

        <center>
        <h1><u>Race Results LeaderBoard</u></h1>
        </center>


        <Table />
        <ScrollTop />
        <JumpTop />
        <Update />
        <Back />
        
        </div>

        </>
        
    );
     
    
}


export default Page3;