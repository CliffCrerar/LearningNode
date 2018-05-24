var express = require('express');
var app = express();

//console.log(process.env)

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.send('<html><head><link href="assets/style.css" rel="stylesheet">q</head><body><h1>Hello World!</h1></body></html>')
});

app.get('/person/:id', function (req, res) {
    res.send('<html><head><link href="assets/style.css" rel="stylesheet"></head><body><h1>Person: ' + req.params.id + '</h1></body></html>')
});

app.get('/api', function (req, res) {
    res.json({ Name: 'Cliff', Lastname: 'Crerar' })
})

app.listen(port);