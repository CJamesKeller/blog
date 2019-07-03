
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    if (request.url.includes('./')) {
       response.writeHead(500).end();
    }

    var filePath = '.' + request.url;

    if (filePath == './') {
        filePath = './index.html';
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            response.writeHead(500);
            response.end();
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end(content, 'utf-8');
        }
    });

})
    .listen(8080);

