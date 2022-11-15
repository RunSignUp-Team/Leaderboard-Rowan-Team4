const { Body } = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const secret = "yZfkZdIlrpwhmd9IHwMcX3MBMyjkdVGe"
const apikey = "llq6HUNrfmBZa3VkQdAKNHS0eUZ1EFij"
var raceData = [];
var eventData = [];
var resultData = [];

resetDB();

function initDB() {

  const sqlite3 = require('sqlite3').verbose();

  let database = new sqlite3.Database('../public/db.db', sqlite3.OPEN_READWRITE, (err) => {
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

function getRaceResults(user, eventID) {

  for (let i = 0; i < user.individual_results_sets[0].num_finishers; i++){
    playerObject = (user.individual_results_sets[0].results[i]);
    resultData[i] = [playerObject.place, eventID, playerObject.first_name, playerObject.last_name, playerObject.chip_time];
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


    db.close;

});
return;
}

async function processResults(eventID, raceID) {
  await processRacesAndEvents();

  fetch('https://runsignup.com/Rest/race/' + raceID + '/results/get-results?api_key=' + apikey +'&api_secret=' + secret + '&format=json&event_id=' + eventID + '&include_total_finishers=T&include_split_time_ms=F&supports_nb=F&page=1&results_per_page=1000')
  .then(response => {
    return response.json();
   })
  .then(user => {

    getRaceResults(user, eventID);

    const sqlite3 = require('sqlite3').verbose();

    let db = initDB();
  
    // create the statement for the insertion of just ONE record
    let insertionQuery = 
     "INSERT INTO Racers_Result (place, event_id, first_name, last_name, result_time ) " +
     "VALUES (?, ?, ?, ?, ?)"; 
  
    let statement = db.prepare(insertionQuery);
  
    populate(insertionQuery, resultData, db);

    db.close;

});
}

function resetDB() {

  const sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('../public/db.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err){
          return console.error(err.message);
      }
  }); 

  db.run('DELETE from Races');
  db.run('DELETE from Event');
  db.run('DELETE from Racers_Result');

  db.close;

}


const map = new Map();

var sqlite3=require('sqlite3').verbose();

function DataExt(db, callback) {
  db.all('SELECT event_id, race_id FROM Event',(err,rows)=>{
      if(err){
          return console.error(err.message);
      }
      else
      {           
          rows.forEach((row)=>{
              map.set(row.event_id, row.race_id);
           });
          
          return callback(false, map);
            
      }

  });
}

var db=new sqlite3.Database('../public/db.db',(err)=>{
  if(err){
      return console.error(err.message);
  }
  console.log('Connected...');
});


DataExt(db, function(err, content) {
  if(err) throw(err);
  ExtractedHostnames = map;
  //console.log("Events: ", ExtractedHostnames);

  for (const [key, value] of map.entries()) {
      console.log(key + ": " + value)
  }
  const createTray = () => {
    const icon = path.join(__dirname, 'icon.png')
   
    const nImage = nativeImage.createFromPath(icon)

    tray = new Tray(nImage)
   
    tray.on('click', (event) => toggleWindow())
}



})

processResults(537625, 21);




