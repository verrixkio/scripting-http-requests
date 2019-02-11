// var request = require('request');

// request('https://sytantris.github.io/http-examples/', function(err, response, body) {
//   if (err) throw err;
//   console.log('Response Status Code:', response.statusCode);
// });


//In this exercise you will write a HTTPS client using request to download an image from the interent.

//Create a new .js file and using request, make a 'GET' request to

var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
      .on('error', function (err) {
        throw err; 
      })
      .on('response', function (response) {
        console.log('Response Status Code: ', response.statusMessage);
      })
      .pipe(fs.createWriteStream('./future.jpg'));