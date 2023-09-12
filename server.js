require('dotenv').config( );
const express = require('express');
const app = express( );
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Flight = require('./models/flight');

// Delete const allFlights, if data.js is not needed to store flights data connecting to MongoDB



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
db.on('open', ( ) => console.log('mongo connected!'));
db.on('close', ( ) => console.log('mongo disconnected'));

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
});

// the urlencoded to access req.body in Post Route
// callback function
app.use(express.urlencoded( { extended: false } ) )



// Index Route
// Display all Flights Data
// Part2: MongoDB
app.get('/flights', async (req, res) => {
    try {
       const foundFlights = await Flight.find({ })
       res.status(200).render('flights/Index', {
        flights: foundFlights,
       });
    } catch (err) {
    res.status(400).send(err)
    }   
});



// New Route
// Part2: MongoDB
app.get("/flights/new", (req, res) => {
    console.log('New controller');
    res.render("Flights/New");
})

// Delete Route
// Part2: MongoDB



// Update Route
// Part2: MongoDB


// Create Route
// Part2: MongoDB
app.post("/flights", async (req, res) => {
    try {
        req.body.myFavFLight = req.body.myFavFlight === "on";
        const createdFlight = await Flight.create(req.body)
        res.status(201).redirect('/flights');
    } catch (err) {
        res.status(400).send(err)
    }
});



// Edit Route
// Part2: MongoDB



// Show Route
// Show selected flight
// Part2: MongoDB




app.listen(PORT, ( ) =>{
    console.log(`Listening on port: $(PORT)`);
})