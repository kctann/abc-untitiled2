var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    var name = String(req.url).substr(1);
    var filename = './source/'+name+'.json';
     fs.readFile(filename,function (err,data) {
         res.writeHead(200, {'Content-Type': 'text/plain'});
         res.write(String(data));
         res.end();
     });
    // fs.readFile('./views/Index.html',function(err,data){
    //    res.writeHead(200,{'Content-Type':'text/html'});
    //    res.write(data);
    //    res.end();
    // });
}).listen(8080);