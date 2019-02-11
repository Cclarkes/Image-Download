var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         console.log("Error! Stopping Program.")
       })

       .on('response', function (response) {
         console.log("Downloading Image...");
         console.log('Response Status Code: ' + response.statusCode + "/n" + "Response Message: " +
         response.statusMessage + "/n" + "Content Type: " + response.headers['content-type']);
       })

       .on('end', function(end) {
           console.log("Download Complete");
       })
       .pipe(fs.createWriteStream('./future.jpg'));