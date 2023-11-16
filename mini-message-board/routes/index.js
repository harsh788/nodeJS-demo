var express = require('express');
var router = express.Router();

messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Message Board", messages: messages });
});
router.get('/new', function(req, res, next) {
  console.log("Inside new path");
  res.render('form');
});
router.post('/new', function(req, res, next) {
  let name = req.body.name
  let text = req.body.message
  messages.push({text: text, user: name, date: new Date()});
  res.redirect('/');
});

module.exports = router;
