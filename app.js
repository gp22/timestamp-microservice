var express = require('express');
var moment = require('moment');
// var timestamp = require('@augmt/timestamp-microservice');
var app = express();

// console.log(timestamp);

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/:datevalue', function(req, res) {
    var datevalue = req.params.datevalue;
    // check for valid date in datevalue
    if (moment(datevalue).isValid()) {
      res.send(moment(datevalue).format('MMMM Do YYYY'));
    }

    var response = {
      "unix": 1450137600,
      "natural": "December 15, 2015"
    };
    // res.send(moment.unix(datevalue).isValid());
});

app.listen(3000, function() {
    console.log('App listening on port 3000');
});
