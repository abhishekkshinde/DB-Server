var con = require('./query');

var getSQL = "Select * from careerinis.Test";
con.query(getSQL,function(err, result){
    if (err) throw err;
    console.log(result);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(JSON.stringify(result));
    con.destroy();
    console.log(con.state);
});