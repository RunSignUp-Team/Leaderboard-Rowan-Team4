const { Body } = require('node-fetch');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const secret = "yZfkZdIlrpwhmd9IHwMcX3MBMyjkdVGe"
const apikey = "llq6HUNrfmBZa3VkQdAKNHS0eUZ1EFij"

fetch('https://runsignup.com/Rest/races?api_key=llq6HUNrfmBZa3VkQdAKNHS0eUZ1EFij&api_secret=yZfkZdIlrpwhmd9IHwMcX3MBMyjkdVGe&format=json&events=T&race_headings=F&race_links=F&include_wa')
  .then(response => {
    return response.json();
  })
  .then(user => {

    for (let i = 0; i < 50; i++) {
      raceObject = user.races[i];
      console.log(raceObject.race.race_id);
    }
  })
