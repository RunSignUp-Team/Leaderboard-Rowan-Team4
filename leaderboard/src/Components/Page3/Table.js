import '../../App.css';
import React, { useState, useEffect } from 'react';
import sendAsync from '../../message-control/renderer';


function Table() {

    

    const [response, setResponse] = useState([]);
    
    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    useEffect(function () {
        const message = "SELECT place, (first_name || ' ' || last_name) AS Name, result_time FROM Racers_Result;"
        send(message);

    }, []);

return (
	<div className="Table">
      <table>
        <tr>
          <th>Place</th>
          <th>Name</th>
          <th>Finish Time</th>
        </tr>
        {response.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.place}</td>
              <td>{val.Name}</td>
              <td>{val.result_time}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default Table;
