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

var db=new sqlite3.Database('db.db',(err)=>{
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
})