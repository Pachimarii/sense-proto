var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var path = require("path");
var app = express();

// Load contents of poke.json into global variable. 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.engine('hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));



app.get('/', function (req, res) {

  res.render('home');
});

app.get('/news', function (req, res) {
  res.render('news');
});

app.get('/about', function (req, res) {
  res.render('about');
});
app.get('/people', function (req, res) {
  res.render('people');
});






app.listen(3000, function () {
  console.log('Listening on port 3000!');
});