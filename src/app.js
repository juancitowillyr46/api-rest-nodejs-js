const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Config
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Routing
const routes = require('./routes');

app.use('/api/', routes);

// Welcome
app.get('/', (req, res) => {
    return res.send(`Api RESTful Users`);
});

app.get('/api/', (req, res) => {
    return res.send(`Api RESTful Users`);
});


module.exports = app;