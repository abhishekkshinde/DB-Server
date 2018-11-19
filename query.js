var mysql = require('mysql');

var con = mysql.createConnection({
  host: "careersinis.cw8f057xdeqc.us-east-1.rds.amazonaws.com",
  user: "master",
  password: "lion1234"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var getSQL = "Select * from careerinis.Test";
    con.query(getSQL,function(err, result){
        if (err) throw err;
        console.log(result);
        con.destroy();
        // console.log(con.state);
      });
  });

  module.exports = con;