import React, { useEffect, useState, useRef } from "react";
import image from '../Images/PinkArrow.png'
import '../CSS/App.css';
import Table from '../Components/Page3/Table.js'
import Update from '../Components/Page3/Update';
import ScrollTop from '../Components/Page3/ScrollTop';
import SlowScroll from '../Components/Page3/SlowScroll';
import JumpTop from '../Components/Page3/JumpTop';
import { Link } from 'react-router-dom'
import Back from "../Components/Page3/Back";


function Page3() {

    return (
        <>

        {console.log(window.location.pathname)}
        <div className="page3format">

        <div>
            <Link to="/page2">
                <img src={image} className="BackArrow" alt="Pink Arrow" style={{position: 'fixed',top: '20px',left: '20px'}}/>
            </Link>
        </div>
        

        <center>
        <h1><u>Race Results LeaderBoard</u></h1>
        </center>


        <Table />
        <ScrollTop />
        <JumpTop />
        <Update />
        
        </div>

        </>
        
    );
     
    
}


export default Page3;