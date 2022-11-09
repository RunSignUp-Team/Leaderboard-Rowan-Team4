import { Populate } from './Components/populateButton.js';
import logo from './runsignup_logo.png';
import './App.css';
import  Dropdown  from './Components/races-dropdown.js'
import { Reset } from './Components/resetButton.js'
import SubmitButton from './Components/page1Submit.js'
/*import { Testing } from './test.js'*/

/*import { Redirect } from "react-router";*/
import { Switch } from "react-router";

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/page2";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";


function App() {

  return (
    <><div className="App">
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
          <form method="POST" action="index.html">
            <center>
              <Dropdown />
              <br />
              <br />

            </center>
            <SubmitButton />
            
            <br />
            <Populate />
            <br />
            <Reset />

          </form>

        </div>


      </header>
    </div>
      </>


  );
  
  
}





export default App;
