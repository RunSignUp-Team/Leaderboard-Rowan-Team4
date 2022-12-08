import React, { useEffect } from "react";
import image from '../Images/PinkArrow.png'
import '../CSS/App.css';
import Table from '../Components/Page3/Table.js'
import Update from '../Components/Page3/Update';
import ScrollTop from '../Components/Page3/ScrollTop';
import SlowScroll from '../Components/Page3/SlowScroll';
import JumpTop from '../Components/Page3/JumpTop';


function Page3() {


    useEffect(() => {
        SlowScroll()

    }, [])

    


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
        <ScrollTop />
        <JumpTop />
        <Update />
        
        </div>

        </>
        
    );
     
    
}


export default Page3;