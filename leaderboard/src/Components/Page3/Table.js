import '../../CSS/App.css';
import React, { useState, useEffect } from 'react';
import sendAsync from '../../Message-Control/renderer';
const { ipcRenderer } = window.require('electron');

function Table() {

    const [response, setResponse] = useState([]);
    const [ageStatus, setAgeStatus] = useState(0)
    const [cityStatus, setCityStatus] = useState(0)
    const [genderStatus, setGenderStatus] = useState(0)
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
        setGenderStatus(response.genderVal);   
      
        
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
      if(genderStatus ===1) {
        message = message + ", gender"
      }

      message = message + " FROM Racers_Result;"

      send(message)

    },);


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
          {genderStatus===1 ? <th>Gender</th> : null}
        </tr>
        {


        response.map(val =>
            
        <tr>

          <td>{val.place}</td>
          <td>{val.Name}</td>
          <td>{val.result_time}</td>
          {ageStatus===1 ? <td>{val.age}</td> : null}
          {stateStatus===1 ? <td>{val.state}</td> : null}
          {cityStatus===1 ? <td>{val.city}</td> : null}
          {genderStatus===1 ? <td>{val.gender}</td> : null}
        </tr>
            
      
        )}
        
      </table>
    </div>
  );
}

export default Table;