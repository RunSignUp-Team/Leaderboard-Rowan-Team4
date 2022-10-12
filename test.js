const { Body } = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const secret = "yZfkZdIlrpwhmd9IHwMcX3MBMyjkdVGe"
const apikey = "llq6HUNrfmBZa3VkQdAKNHS0eUZ1EFij"
var array1 = [];

// grabs result info from a specified race id + event id combo, then displays place order, name & time of each finisher
// race id and event id can be inserted into the link through concatenation like how apikey and secret are
fetch('https://runsignup.com/Rest/race/21/results/get-results?api_key=' + apikey +'&api_secret=' + secret + '&format=json&event_id=537625&include_total_finishers=T&include_split_time_ms=F&supports_nb=F&page=1&results_per_page=500')
  .then(response => {
    return response.json();
   })
  .then(user => {
  
    console.log("Place\t" + "Name\t" + "\t\tTime\t")
    

    for (let i = 0; i < user.individual_results_sets[0].num_finishers; i++){
      playerObject = (user.individual_results_sets[0].results[i]);
      array1[i] = [playerObject.place, playerObject.first_name, playerObject.last_name, playerObject.chip_time];
    }
    
    console.log(array1[1]);
  const sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('db.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err){
          return console.error(err.message);
      }
  });
  
  // create the statement for the insertion of just ONE record
  let artistQuery = 
    "INSERT INTO Test (place, first_name, last_name, result_time ) " +
    "VALUES (?, ?, ?, ?)"; 
  
  let statement = db.prepare(artistQuery);
  
  
  for (var i = 0; i < array1.length; i++) {
      statement.run(array1[i], function (err) { 
          if (err) throw err;
      });
  }
  

  });

  
  