const apiKey = 'fl6UtJPAkHn3jylC2s9P7LQ39eYd489e'
const apiSecret = 'L3QCcl8zAVa3gM8ONfTsdmRcedCpBLQl'

const raceID = 137710
const eventID5K = 655875
const individual5kSet = 358824

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

    

    request.post(
        'https://runsignup.com/Rest/race/137710/results/full-results?api_key=fl6UtJPAkHn3jylC2s9P7LQ39eYd489e&api_secret=L3QCcl8zAVa3gM8ONfTsdmRcedCpBLQl&format=json',
        { json: {
            "results": [{
                    "bib": 3001,
                    "place": 1,
                    "clock_time": "17:00.1",
                    "chip_time": "17:00.0"
                },
                {
                    "bib": 3002,
                    "place": 2,
                    "clock_time": "17:00.2",
                    "chip_time": "17:00.2"
                }
          ]
        } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );
}


//await new Promise(resolve => setTimeout(resolve, 5000));

//358810

deleteResultSet(raceID, eventID5K, individual5kSet);

//postResults(raceID, eventID5K)
