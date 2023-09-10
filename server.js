require('gotenv').config( );
const express = require('express');
const app = express( );
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const allFlights = require('./data');
const Flight = require('./models/flight');


//Global Configuration for MongoDB 
// (Not using previous fruit/veggie Data Configuration set up)
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

mongoose.connect(mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

// Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('open', () => console.log('mongo connected!'));
db.on('close', () => console.log('mongo disconnected'));

// Create jsxViewEngine
const jsxViewEngine = require('jsx-view-engine');

// app.set('view engine and invoke jsxEngine)
app.set('view engine', 'jsx')
app.set('views', './views');
app.engine('jsx', jsxViewEngine( ));


// Middleware
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next( );
})

// the urlencoded to access req.body in Post Route
// callback function
app.use(express.urlencoded( { extended: false } ) )


// Index Route
// Part2: MongoDB


// New Route
// Part2: MongoDB


// Delete Route
// Part2: MongoDB



// Update Route
// Part2: MongoDB


// Create Route
// Part2: MongoDB


// Edit Route
// Part2: MongoDB



// Show Route
// Part2: MongoDB


// HELP!!! WHERE SHOULD USER STORIES GO?? 
// ("As A User" == AAU):
/* 
- AAU, I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time

-AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it

-Hint: Checkout the <input type="datetime-local">to assist users in entering valid date/time values
*/

app.listen(PORT, ( ) =>{
    console.log(`Listening on port: $(PORT)`);
})