import '../../App.css';
import React, { useState, useEffect, Com } from 'react';
import sendAsync from '../../message-control/renderer';
import {Font} from './Font';
import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
const { ipcRenderer } = window.require('electron');



function Table() {

    const [response, setResponse] = useState([]);
    const [ageStatus, setAgeStatus] = useState(0)
    const [cityStatus, setCityStatus] = useState(0)
    const [countyStatus, setCountyStatus] = useState(0)
    const [stateStatus, setStateStatus] = useState(0)
    
    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    ipcRenderer.send('getCheckboxValues')
    ipcRenderer.on('sendCheckboxValues', (event, arg) => {
        const response = arg;

        setAgeStatus(response.ageVal); 
        setStateStatus(response.stateVal);
        setCityStatus(response.cityVal);
        setCountyStatus(response.countyVal);   
      
        
    });

    useEffect(function () {

      let message = "SELECT place, (first_name || ' ' || last_name) AS Name, result_time"

      if(ageStatus === 1) {
        message = message + ", age"
      }
      if(stateStatus === 1) {
        message = message + ", state"
      }
      if(cityStatus ===1) {
        message = message + ", city"
      } 
      if(countyStatus ===1) {
        message = message + ", county"
      }

      message = message + " FROM Racers_Result;"
      send(message);


    }, );


return (
	<div className="Table">
      <table>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Finish Time</th>
          {ageStatus===1 ? <th>Age</th> : null}
          {stateStatus===1 ? <th>State</th> : null}
          {cityStatus===1 ? <th>City</th> : null}
          {countyStatus===1 ? <th>County</th> : null}
        </tr>
        {response.map((val, key) => {

            return (
              <tr key={key}>

                <td>{val.place}</td>
                <td>{val.Name}</td>
                <td>{val.result_time}</td>
                {ageStatus===1 ? <td>{val.age}</td> : null}
                {stateStatus===1 ? <td>{val.state}</td> : null}
                {cityStatus===1 ? <td>{val.city}</td> : null}
                {countyStatus===1 ? <td>{val.county}</td> : null}
              </tr>
            )
      
        })}
        
      </table>
    </div>
  );
}

export default Table;
