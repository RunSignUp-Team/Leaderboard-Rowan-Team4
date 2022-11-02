import logo from './runsignup_logo.png';
import './App.css';
import { RacesDropdown } from './Components/races-dropdown.js'
import { EventsDropdown } from './Components/events-dropdown.js'
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
    <label htmlFor="race-names">Choose a Race name: </label>
    <RacesDropdown/>
    <label htmlFor="event-names">&emsp; Choose an Event name: </label>
    <EventsDropdown/>
    <br />
    <br />
    
  </center>
  <SubmitButton/>
</form>

      </div>

      
      </header>
    </div>



  );
  
  
}



export default App;
