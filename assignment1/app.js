var express = require("express");
var app = express();
port = 3000;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
app.get('/about', function(req, res) {
    res.sendFile(__dirname + '/about.html');
});
app.get('/contact-me', function(req, res) {
    res.sendFile(__dirname + '/contact-me.html');
});
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});