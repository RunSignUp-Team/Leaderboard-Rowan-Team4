var array1 = ['first_name', 'last_name'];


const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('db.db', sqlite3.OPEN_READ, (err) => {
    if (err){
        return console.error(err.message);
    }
});

// create the statement for the insertion of just ONE record
let query = 
  `select ? from Test`; 

db.each(query, ['first_name'], (err, row) => {
    if (err) {
        throw err;
    }
    console.log(`${row.first_name} ${row.last_name}`); //Displaying as undefined for some reason. 
});

