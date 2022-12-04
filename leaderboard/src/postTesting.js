const apiKey = 'fl6UtJPAkHn3jylC2s9P7LQ39eYd489e'
const apiSecret = 'L3QCcl8zAVa3gM8ONfTsdmRcedCpBLQl'

const raceID = 137710
const eventID5K = 655875
const individual5kSet = 358859

const eventID10k = 655876
const individual10kSet = 2

const fetch = require('node-fetch');

function deleteResultSet(raceID, eventID, resultSet) {
    url = 'https://runsignup.com/Rest/race/' + raceID + '/results/delete-result-set?api_key=' + apiKey + '&api_secret=' + apiSecret + '&format=json&event_id=' + eventID + '&individual_result_set_id=' + resultSet
        
    fetch(url, {
        method: 'POST',
    }).then(res => res.json())
        .then(json => console.log(json));
}

function postResults(raceID, eventID) {

    var request = require('request');

    


}


//await new Promise(resolve => setTimeout(resolve, 5000));

//358810

deleteResultSet(raceID, eventID5K, individual5kSet);

//postResults(raceID, eventID5K)
