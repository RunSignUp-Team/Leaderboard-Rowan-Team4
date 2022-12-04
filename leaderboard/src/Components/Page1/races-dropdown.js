import React, { useState, useEffect } from 'react';
import sendAsync from '../../message-control/renderer';
import SubmitButton from './page1Submit';


function Dropdown() {

    const [response, setResponse] = useState([]);
    const [response2, setResponse2] = useState([]);

    const [raceSelection, setRaceSelection] = useState('');
    const [eventSelection, setEventSelection] = useState('');

    const [condition, setCondition] = useState('true')

    var test;
    
    function send(sql) {
        sendAsync(sql).then((result) => setResponse(result));
    }

    function send2(sql) {
        sendAsync(sql).then((result) => setResponse2(result));
    }

    

    useEffect(function () {
        const message = 'SELECT race_name FROM Races;'
        send(message);

    }, []);

    function handleChangeRace(e) {
        //this.setState({selectValue:e.target.value});
        setRaceSelection(e.target.value);
        let raceid = e.target.value;
        const chars = {'"':'','’':'',"'":""};
        raceid = raceid.replace(/["’']/g, m => chars[m]);
        const message2 = `select b.event_name from Races a, event b where  a.race_id = b.race_id and REPLACE(REPLACE(a.race_name, '"', ''),'’', '') LIKE `+ '\'' + raceid + '\'';
        send2(message2);      
    }

    function handleChangeEvent(e) {
        setCondition(false)
        setEventSelection(e.target.value)
        
    }




    return(   
        <div className = "dropdowns">
            <label htmlFor="race-names">Choose a Race name: </label>

            <select name="race-names" id="race-names" onChange={handleChangeRace}>
                <option disabled selected value> -- select an option -- </option>
            {
                response.map(race => 
                    <option value = {race.race_name}>{race.race_name}</option>

                )

            }
        
            </select>
            <label htmlFor="event-names">&emsp; Choose an Event name: </label>
            <select name="event-names" id="event-names" onChange={handleChangeEvent}>
                <option disabled selected value> -- select an option -- </option>
            {
                response2.map(event => 
                    <option value = {event.event_name}>{event.event_name}</option>

                )

            }
            
            </select>
            <br />
            <br />

            <SubmitButton race = {raceSelection} event = {eventSelection} buttonCondition = {condition}/>
            
        </div>


    )   
    
   

}

export default Dropdown;