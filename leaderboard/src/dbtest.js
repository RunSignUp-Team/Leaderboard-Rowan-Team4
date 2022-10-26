const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('db.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err){
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database');
});

db.serialize(() => {
    db.each(`select * from Test
    order by test_id desc`, 
    (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row.test_id + "\t" + row.name);
    });
  });