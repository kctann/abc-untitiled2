var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 8080;

app.get('/HelloWorld', function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');
    var filedata = null;
    var name = req.param('name') || 'Somebody';
    var respondWith = '<?xml version="1.0" encoding="UTF-8"?>';
    var filename = './../../source/1.json';

    // fs.readFile(filename,function(err,data){
    //     res.writeHead(200, {'Content-Type': 'application/plain'});
    //     res.write(String(data));
    //     res.end();
    // });
    respondWith += "<h1>Hello " + name + "!</h1>";
    var data = "test success";
    res.status(200);
    res.setHeader('Content-type', 'Application/json');
    return res.sendFile(path.resolve('source/1.json'));
});

app.get('/HerokuTest', function(req, res) {
	res.write('HerokuTest');
	res.end();
});

app.listen(port);
