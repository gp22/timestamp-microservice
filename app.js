var express = require('express');
var moment = require('moment');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/:datevalue', function(req, res) {
    var datevalue = req.params.datevalue;
    var response = {
        "unix": null,
        "natural": null
    };
    // check for valid natural language date in datevalue
    if (moment(datevalue,
       ['MMMM DD YYYY', 'MMM DD YYYY',
        'MM DD YYYY', 'MM DD YY',
        'M D YYYY', 'M D YY',
        'YYYY M D', 'YYYY MM DD',
        'MM-DD-YYYY', 'MM-DD-YY',
        'M-D-YYYY', 'M-D-YY',
        'YYYY-M-D', 'YYYY-MM-DD'], true)
       .isValid()) {
        var unix = Number((moment(datevalue).format('X')));
        var natural = (moment(datevalue).format('MMMM DD, YYYY'));
        response["unix"] = unix;
        response["natural"] = natural;
        res.send(response);
    // check for valid unix timestamp in datevalue
    } else if (moment(datevalue, 'X', true).isValid()) {
        var unix = Number((moment.unix(datevalue).format('X')));
        var natural = (moment.unix(datevalue).format('MMMM DD, YYYY'));
        response["unix"] = unix;
        response["natural"] = natural;
        res.send(response);
    // send default response if no valid datevalue found
    } else {
        res.send(response);
    }
});

app.listen(3000, function() {
    console.log('App listening on port 3000');
});
