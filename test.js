const { Body } = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const secret = "yZfkZdIlrpwhmd9IHwMcX3MBMyjkdVGe"
const apikey = "llq6HUNrfmBZa3VkQdAKNHS0eUZ1EFij"
var raceData = [];
var eventData = [];
var resultData = [];

function initDB() {

  const sqlite3 = require('sqlite3').verbose();

  let database = new sqlite3.Database('db.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err){
          return console.error(err.message);
      }
  }); 

  return database;

}

function populate(insertionQuery, array, db) {

  let statement = db.prepare(insertionQuery)

  for (var i = 0; i < array.length; i++) 
  {
      statement.run(array[i], function (err) { 
          if (err) throw err;
      });
  }

}


function getRacesAndEvents(user) {

  // can display id's for 50 races, 10 for testing purposes
  for (let i = 0; i < 10; i++) {
    raceObject = user.races[i];
    raceData[i] = [raceObject.race.race_id, raceObject.race.name]
    // console.log(i + "  \nRace ID: " + raceObject.race.race_id, raceObject.race.name);
    
    // some races have multiple events, group race id and their event id's together
    // concatenating into string for console printing purposes, event id is an integer
    for(let j = 0; raceObject.race.events[j] != null; j++) {
        eventData.push([raceObject.race.race_id, raceObject.race.events[j].event_id , raceObject.race.events[j].name]);
    }
        
  
  }

}

function getRaceResults(user) {

  for (let i = 0; i < user.individual_results_sets[0].num_finishers; i++){
    playerObject = (user.individual_results_sets[0].results[i]);
    resultData[i] = [playerObject.place, playerObject.first_name, playerObject.last_name, playerObject.chip_time];
  }
  
}




async function processRacesAndEvents() {
  fetch('https://runsignup.com/Rest/races?api_key=' + apikey + ' &api_secret=' + secret + '&format=json&events=T&race_headings=F&race_links=F&include_waiver=F&include_multiple_waivers=F&include_event_days=F&include_extra_date_info=F&page=1&results_per_page=50&sort=name+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=T&distance_units=K')
  .then(response => {
    return response.json();
  })
  .then(user => {

    getRacesAndEvents(user);
    const sqlite3 = require('sqlite3').verbose();

    let db = initDB();
  
    // create the statement for the insertion of just ONE record
    let insertionQuery = 
      "INSERT INTO Event (race_id, event_id, event_name) " +
      "VALUES (?, ?, ?)"; 

    
   
    populate(insertionQuery, eventData, db);

    let insertionQuery2 =    
    "INSERT INTO Races (race_id, race_name) " +
    "VALUES (?, ?)"; 

    populate(insertionQuery2, raceData, db);

});
return;
}

async function processResults() {
  await processRacesAndEvents();

  fetch('https://runsignup.com/Rest/race/21/results/get-results?api_key=' + apikey +'&api_secret=' + secret + '&format=json&event_id=537625&include_total_finishers=T&include_split_time_ms=F&supports_nb=F&page=1&results_per_page=1000')
  .then(response => {
    return response.json();
   })
  .then(user => {
  
    console.log("Place\t" + "Name\t" + "\t\tTime\t")
    

    getRaceResults(user);
    
    console.log(resultData[1]);
    const sqlite3 = require('sqlite3').verbose();

    let db = initDB();
  
    // create the statement for the insertion of just ONE record
    let insertionQuery = 
     "INSERT INTO Racers_Result (place, first_name, last_name, result_time ) " +
     "VALUES (?, ?, ?, ?)"; 
  
    let statement = db.prepare(insertionQuery);
  
  
    populate(insertionQuery, resultData, db);

});
}

processResults();
