var http = require('http')
var con = require('./query');


http.createServer(function (req, res) {
        console.log("Connected!");
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.writeHead(200, 
            {'Content-type': 'application/json'});
        res.end('Hello World\n');
}).listen(8080);

