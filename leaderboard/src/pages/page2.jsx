import '../CSS/App.css';
import { useEffect } from 'react';
import Checkboxes from '../Components/Page2/Checkboxes'
import Body from '../Components/Page2/Body'
import Header from '../Components/Page2/Header'
import image from '../Images/PinkArrow.png'
const { ipcRenderer } = window.require('electron');

function Page2 () {


  useEffect(()=>{
    ipcRenderer.send('resetCheckboxes')
  }, [])


    return (
      <>
      <a href="/"> <img src={image} className="BackArrow" alt="Pink Arrow" /> </a>
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
        
        
      </div>
      </>
    );
  
  
}
export default Page2;
