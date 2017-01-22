var express = require('express');
var timestamp = require('@augmt/timestamp-microservice');
var app = express();

// console.log(timestamp);

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/:datevalue', function(req, res) {
    var datevalue = req.params.datevalue;
    console.log('datevalue is ' + datevalue);
});

app.listen(3000, function() {
    console.log('App listening on port 3000');
});
