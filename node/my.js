var http = require('http');
//var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //var q = url.parse(req.url, true).query;
    //var txt = q.year + " " + q.month;
    //res.write(txt);

    fs.readFile('demo.html', function(err, data) {
        res.write(data);
        res.end();
    });

    //res.end();
    console.log("Inside");
}).listen(8080);

console.log("Outside");

