import '../App.css';
import Checkboxes from '../Components/Page2/Checkboxes'
import Body from '../Components/Page2/Body'
import Header from '../Components/Page2/Header'
import image from '../PinkArrow.png';

function Page2 () {
 
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
        
      </div>
      </>
    );
  
  
}
export default Page2;
