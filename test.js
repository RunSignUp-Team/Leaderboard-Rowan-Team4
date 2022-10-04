const { Body } = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const secret = "yZfkZdIlrpwhmd9IHwMcX3MBMyjkdVGe"
const apikey = "llq6HUNrfmBZa3VkQdAKNHS0eUZ1EFij"

// grabs race id and corresponding event id's from recent races with results
fetch('https://runsignup.com/Rest/races?api_key=' + apikey + ' &api_secret=' + secret + '&format=json&events=T&race_headings=F&race_links=F&include_waiver=F&include_multiple_waivers=F&include_event_days=F&include_extra_date_info=F&page=1&results_per_page=50&sort=name+ASC&start_date=today&only_partner_races=F&search_start_date_only=F&only_races_with_results=T&distance_units=K')
  .then(response => {
    return response.json();
  })
  .then(user => {

    // can display id's for 50 races, 10 for testing purposes
    for (let i = 0; i < 10; i++) {
      raceObject = user.races[i];
      console.log("\nRace ID: " + raceObject.race.race_id);

      var events = "";

      // some races have multiple events, group race id and their event id's together
      // concatenating into string for console printing purposes, event id is an integer
      for(let i = 0; raceObject.race.events[i] != null; i++) {
          events = events + raceObject.race.events[i].event_id + " ";
      }
      
      console.log("Corresponding Event ID's: " + events);

    }
  })



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
      console.log(playerObject.place + "\t" + playerObject.first_name + " " + playerObject.last_name + "\t\t" +playerObject.chip_time);
    }

  })
