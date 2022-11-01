import logo from './runsignup_logo.png';
import './App.css';
import { RacesDropdown } from './Components/races-dropdown.js'


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
    <label htmlFor="event-names">Choose an Event name: </label>
    <select name="event-names" id="event-names">
      <option value="event1">1k</option>
      <option value="event2">2k</option>
      <option value="event3">3k</option>
      <option value="event4">4k</option>
      <option value="event5">5k</option>
      <option value="event6">6k</option>
      <option value="event7">7k</option>
      <option value="event8">8k</option>
      <option value="event8">9k</option>
    </select>
    <br />
    <br />
    <input className="submit" type="submit" defaultValue="Submit" />
  </center>
</form>

      </div>

      </header>
    </div>



  );
  
}



export default App;
