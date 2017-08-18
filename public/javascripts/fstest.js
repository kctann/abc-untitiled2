/**
 * Created by James on 2017/7/29.
 */
var fs = require('fs');

//create a file named mynewfile1.txt:
fs.appendFile('mynewfile1.txt', function (err) {
    if (err) throw err;
    console.log('Saved!');
});
