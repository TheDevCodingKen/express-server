// import files and packages up here
const express = require('express');
const morgan = require('morgan');
const topSpotsData = require('../server/data.json');

// create Express server below
const app = express();
// Make Morgan log each request using the pre-defined 'dev' format
app.use(morgan('dev'));

// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get('/', function(req, res) {
    res.status(200).send('Hello');
});
app.get('/data', function(req, res) {
    res.status(200).json(topSpotsData);
});
app.get('*', function(req, res){
    res.end('Not Found');
});

// Export the Express application
module.exports = app;