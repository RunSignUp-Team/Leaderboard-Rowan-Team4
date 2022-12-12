const { ipcMain, ipcRenderer, app } = require('electron');
const isDev = require('electron-is-dev');
const sqlite3 = require('sqlite3');
const fetch = require('electron-fetch').default
const path = require('path');


const secret = "yZfkZdIlrpwhmd9IHwMcX3MBMyjkdVGe"
const apikey = "llq6HUNrfmBZa3VkQdAKNHS0eUZ1EFij"

var raceData = [];
var eventData = [];
var resultData = [];

var raceID;
var eventID;

var stateChecked = 0;
var cityChecked = 0;
var genderChecked = 0;
var ageChecked = 0;

var resultsUpdated = 0;

function initDB() {

  const sqlite3 = require('sqlite3').verbose();

  let database;

  if(isDev) {
    database = new sqlite3.Database('./public/db.db', sqlite3.OPEN_READWRITE, (err) => {
        if (err){
            return console.error(err.message);
        }
    }); 
  }
  else {
    database = new sqlite3.Database(path.join(__dirname, '../build/db.db'), sqlite3.OPEN_READWRITE, (err) => {
        if (err){
            return console.error(err.message);
        }
    }); 
  }

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
        "INSERT OR IGNORE INTO Event (race_id, event_id, event_name) " +
        "VALUES (?, ?, ?)"; 
  
      
     
      populate(insertionQuery, eventData, db);
  
      let insertionQuery2 =    
      "INSERT OR IGNORE INTO Races (race_id, race_name) " +
      "VALUES (?, ?)"; 
  
      populate(insertionQuery2, raceData, db);


      db.run(      `UPDATE Races SET race_name = REPLACE(race_name, '’', '');`     )

      db.run('INSERT OR IGNORE into Races (race_id, race_name) VALUES ("21", "In Person 8K Results")')
      db.run('INSERT OR IGNORE into Event (event_id, event_name, race_id) VALUES ("537625", "8k Event", "21")')
      db.run('INSERT OR IGNORE into Races (race_id, race_name) VALUES ("137710", "Rowan Test Race - Team 4")')
      db.run('INSERT OR IGNORE into Event (event_id, event_name, race_id) VALUES ("655875", "5k", "137710")')
  
      db.close;
  
    });

}

function getRaceResults(user, eventID) {

    for (let i = 0; i < user.individual_results_sets[0].num_finishers; i++){
      playerObject = (user.individual_results_sets[0].results[i]);
      resultData[i] = [playerObject.result_id, playerObject.place, eventID, playerObject.first_name, playerObject.last_name, playerObject.chip_time, playerObject.age, playerObject.state, playerObject.gender, playerObject.city];
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
      "INSERT or ignore into Racers_Result (result_id, place, event_id, first_name, last_name, result_time, age, state, gender, city ) " +
       "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);" 
      let statement = db.prepare(insertionQuery);
    
      populate(insertionQuery, resultData, db);
  
      db.close;
  
  });
  }

function resetDB() {

    const sqlite3 = require('sqlite3').verbose();

    db = initDB();
  
    db.run('DELETE from Races');
    db.run('DELETE from Event');
    db.run('DELETE from Racers_Result');
  
    raceData = []
    eventData = []
    db.close;
  
}

const database = initDB();



ipcMain.on('asynchronous-message', (event, arg) => {
    const sql = arg;
    database.all(sql, (err, rows) => {
        event.reply('asynchronous-reply', (err && err.message) || rows);
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
            raceID = rows.race_id  
            
            let eventname = "'" + response.eventName + "'"
            const eventIDquery = 'SELECT event_id FROM Event WHERE event_name = ' + eventname + ' AND race_id = ' + raceID
        
            database.get(eventIDquery, (err, rows) => {
                if (err) {
                    throw err;
                }
                else {
                    debugger;
                    eventID = rows.event_id
                }
            });
        }

    });
})


ipcMain.on('get_results', (event, arg) => {
    processResults(eventID, raceID);
});

ipcMain.on('resetResults', (event, arg) => {
    const sqlite3 = require('sqlite3').verbose();
  
    db = initDB();

    db.run('DELETE from Racers_result')

    resultData = []
    db.close;


});

ipcMain.on('cityChecked', (event, arg) => {
    if (cityChecked === 0) {
        cityChecked = 1
    }
    else {
        cityChecked = 0
    }


});

ipcMain.on('stateChecked', (event, arg) => {
    if (stateChecked === 0) {
        stateChecked = 1
    }
    else {
        stateChecked = 0
    }



});

ipcMain.on('ageChecked', (event, arg) => {
    if (ageChecked === 0) {
        ageChecked = 1
    }
    else {
        ageChecked = 0
    }



});

ipcMain.on('genderChecked', (event, arg) => {
    if (genderChecked === 0) {
        genderChecked = 1
    }
    else {
        genderChecked = 0
    }


});

ipcMain.on('resetCheckboxes', (event, arg) => {
    stateChecked = 0;
    cityChecked = 0;
    genderChecked = 0;
    ageChecked = 0;
});

ipcMain.on('getCheckboxValues', (event, arg) => {
    let checked = 1;

    const checkboxValues = {
        ageVal : ageChecked,
        cityVal : cityChecked,
        genderVal : genderChecked,
        stateVal : stateChecked,
        checkboxVal : checked

    }

    event.sender.send('sendCheckboxValues', checkboxValues)

});

ipcMain.on('resultsUpdated', (event, arg) => {
    resultsUpdated = resultsUpdated + 1;
    event.sender.send('rerenderTable', resultsUpdated)

})



module.exports = {
    resetDB,
    processRacesAndEvents,
    cityChecked,
    genderChecked,
    ageChecked,
    stateChecked
}