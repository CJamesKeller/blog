
var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    if (request.url.includes('./')) {
        response.writeHead(500).end();
    }

    var filePath = './public/' + request.url;

    if (filePath == './public/' || filePath == './public//') {
        filePath = './public/index.html';
    }

    fs.readFile(filePath, function (error, content) {
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
    .listen(process.env.PORT || 5000);

