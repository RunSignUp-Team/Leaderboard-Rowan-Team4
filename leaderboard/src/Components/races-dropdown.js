import React, { useState, useEffect } from 'react';
import sendAsync from '../message-control/renderer';


function Dropdown() {

    

    const [response, setResponse] = useState([]);
    const [response2, setResponse2] = useState([]);


    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    function send2(sql) {
        sendAsync(sql).then((result) => setResponse2(result));
    }

    

    useEffect(function () {
        const message = 'SELECT race_id FROM Races;'
        send(message);

    }, []);

    function handleChange(e) {
        //this.setState({selectValue:e.target.value});
        let raceid = e.target.value;
        const message2 = 'SELECT event_id FROM Event WHERE race_id = ' + raceid;
        send2(message2);        
    }


    return(   
        <div className = "dropdowns">
            <label htmlFor="race-names">Choose a Race name: </label>

            <select name="race-names" id="race-names" onChange={handleChange} >
            {
                response.map(race => 
                    <option value = {race.race_id}>{race.race_id}</option>

                )

            }
        
            </select>
            <label htmlFor="event-names">&emsp; Choose an Event name: </label>
            <select name="event-names" id="event-names">
            {
                response2.map(event => 
                    <option value = {event.event_id}>{event.event_id}</option>

                )

            }
            </select>

        </div>


    )   
    
   

}

export default Dropdown;