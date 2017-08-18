/**
 * Created by James on 2017/7/26.
 */
var fs = require('fs'),
    request = require('request');
var sleep = require('sleep');

var download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        //console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);
        var contentLength = res.headers['content-length'];
        console.log('file-name:', filename);
        if(contentLength>23) {
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        }

    });
};
for(var i = 101;i<=200;i++){

    download('https://swarfarm.com/api/bestiary/'+i+'.json', '../../source/'+i+'.json', function(){
        sleep.msleep(100);
});
}