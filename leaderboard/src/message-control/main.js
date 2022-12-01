const { ipcMain, ipcRenderer } = require('electron');
const sqlite3 = require('sqlite3');
const fetch = require('electron-fetch').default
const { channels } = require('../shared/constants');


const secret = "yZfkZdIlrpwhmd9IHwMcX3MBMyjkdVGe"
const apikey = "llq6HUNrfmBZa3VkQdAKNHS0eUZ1EFij"
var raceData = [];
var eventData = [];
var resultData = [];
var raceID;
var eventID;

function initDB() {

  const sqlite3 = require('sqlite3').verbose();

  let database = new sqlite3.Database('./public/db.db', sqlite3.OPEN_READWRITE, (err) => {
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

function processRacesAndEvents() {
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


      db.run(      `UPDATE Races SET race_name = REPLACE(race_name, '’', '');`     )
  
      db.close;
  
    });

}

function getRaceResults(user, eventID) {

    for (let i = 0; i < user.individual_results_sets[0].num_finishers; i++){
      playerObject = (user.individual_results_sets[0].results[i]);
      resultData[i] = [playerObject.result_id, playerObject.place, eventID, playerObject.first_name, playerObject.last_name, playerObject.chip_time];
    }
    
}

function processResults(eventID, raceID) {

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
      "INSERT or ignore into Racers_Result (result_id, place, event_id, first_name, last_name, result_time ) " +
       "VALUES (?, ?, ?, ?, ?, ?)"; 
    
      let statement = db.prepare(insertionQuery);
    
      populate(insertionQuery, resultData, db);
  
      db.close;
  
  });
  }

function addTestRace() {
    const sqlite3 = require('sqlite3').verbose();
  
    let db = new sqlite3.Database('./public/db.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err){
            return console.error(err.message);
        }
    }); 

    db.run('INSERT into Races (race_id, race_name) VALUES ("21", "In Person 8K Results")')
    db.run('INSERT into Event (event_id, event_name, race_id) VALUES ("537625", "8k Event", "21")')
    db.run('INSERT into Races (race_id, race_name) VALUES ("137710", "Rowan Test Race - Team 4")')
    db.run('INSERT into Event (event_id, event_name, race_id) VALUES ("655875", "5k", "137710")')
}

function resetDB() {

    const sqlite3 = require('sqlite3').verbose();
  
    let db = new sqlite3.Database('./public/db.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err){
            return console.error(err.message);
        }
    }); 
  
    db.run('DELETE from Races');
    db.run('DELETE from Event');
    db.run('DELETE from Racers_Result');
  
    db.close;
  
  }

const database = initDB();
const map = new Map();


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

ipcMain.on(channels.ASYNC_MESSAGE, (event, arg) => {
    const sql = arg;
    database.all(sql, (err, rows) => {
        event.reply(channels.ASYNC_REPLY, (err && err.message) || rows);
    });


});

ipcMain.on('storeRaces', (event, arg) => {
    const response = arg;

    let racename = "'" + response.raceName + "'"    
    const raceIDquery = 'SELECT race_id FROM Races WHERE race_name = ' + racename

    database.get(raceIDquery, (err, rows) => {
        if (err) {
            throw err;
        }
        else {
            console.log(rows.race_id)
            raceID = rows.race_id  
            
            let eventname = "'" + response.eventName + "'"
            const eventIDquery = 'SELECT event_id FROM Event WHERE event_name = ' + eventname + ' AND race_id = ' + raceID
        
            database.get(eventIDquery, (err, rows) => {
                if (err) {
                    throw err;
                }
                else {
                    debugger;
                    console.log(rows.event_id)
                    eventID = rows.event_id
                }
            });
        }

    });
})

ipcMain.on(channels.GET_DATA, (event, arg) => {
    processRacesAndEvents();
    addTestRace();
    console.log("Races & Events Populated");
});

ipcMain.on(channels.RESET_DB, (event, arg) => {
    resetDB();
    console.log("Database Reset");
});

ipcMain.on(channels.FILL_MAP, (event, arg) => {
    DataExt(database, function(err, content) {
        if(err) throw(err);
        ExtractedHostnames = map;
        //console.log("Events: ", ExtractedHostnames);
    
        for (const [key, value] of map.entries()) {
            console.log(key + ": " + value)
        }

        
    })    
    console.log("Map filled")

    
});



ipcMain.on(channels.GET_RESULTS, (event, arg) => {
    processResults(eventID, raceID);
});


