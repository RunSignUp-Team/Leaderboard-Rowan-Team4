import { Populate } from './Components/populateButton.js';
import logo from './runsignup_logo.png';
import './App.css';
import  Dropdown  from './Components/races-dropdown.js'
import { Reset } from './Components/resetButton.js'
import SubmitButton from './Components/page1Submit.js'
/*import { Testing } from './test.js'*/

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <br></br><br></br><br></br>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br><br></br><br></br>
        {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  */}

      <div id="submit form">
      <form method="POST" action="page2.html">
  <center>
    <Dropdown/>
    <br />
    <br />
    
  </center>
  <SubmitButton/>
  <br />
  <Populate/>
  <br/>
  <Reset/>
  
</form>

      </div>

      
      </header>
    </div>



  );
  
  
}



export default App;
