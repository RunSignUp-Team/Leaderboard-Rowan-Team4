var array1 = ['first_name', 'last_name'];


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('db.db', sqlite3.OPEN_READ, (err) => {
    if (err){
        return console.error(err.message);
    }
});

// create the statement for the insertion of just ONE record
let query = 
  `select place, first_name, last_name, result_time from Racers_Result`; // Cannot use ? for some reason to input which fields we want returned

db.each(query, (err, row) => {
    if (err) {
        throw err;
    }
    console.log(`${row.place} ${row.first_name} ${row.last_name} ${row.result_time}` );
});

