import '../../App.css';
import React, { useState, useEffect } from 'react';
import sendAsync from '../../message-control/renderer';


function Table() {

    

    const [response, setResponse] = useState([]);
    
    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    useEffect(function () {
        const message = 'SELECT event_id, event_name, race_id FROM Event;'
        send(message);

    }, []);

return (
	<div className="Table">
      <table>
        <tr>
          <th>event_id</th>
          <th>event_name</th>
          <th>race_id</th>
        </tr>
        {response.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.event_id}</td>
              <td>{val.event_name}</td>
              <td>{val.race_id}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default Table;
