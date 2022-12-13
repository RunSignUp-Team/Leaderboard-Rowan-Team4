import '../CSS/App.css';
import { useEffect } from 'react';
import Checkboxes from '../Components/Page2/Checkboxes'
import Body from '../Components/Page2/Body'
import Header from '../Components/Page2/Header'
import image from '../Images/PinkArrow.png'
import { Link } from 'react-router-dom';
const { ipcRenderer } = window.require('electron');

function Page2 () {


  useEffect(()=>{
    ipcRenderer.send('resetCheckboxes')
  }, [])


    return (
      <>
    <Link to="/">
      <img src={image} className="BackArrow" alt="Pink Arrow" style={{position: 'fixed',top: '20px',left: '20px'}} />
    </Link>      
    
    <div className="page2format">
        <br>
        </br>
        <Header />
        <br>
        </br>
        <Body />
        <br></br>
        <Checkboxes />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br />
        <br />
        <hr style={{height:"3px", visibility: "hidden"}} />
        
        
      </div>
      </>
    );
  
  
}
export default Page2;
