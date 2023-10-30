var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = q.pathname === "/" ? "./index.html" : `.${q.pathname}.html`;
    fs.readFile(filename, function (err, data) {
        if(err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end(`<h1>Error: 404</h1><p>The page you are looking for doesn't exist.</p> <a href="/">Back home.</a>`);
        }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8081);
