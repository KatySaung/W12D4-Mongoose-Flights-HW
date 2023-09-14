require('dotenv').config( );
const express = require('express');
const app = express( );
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Flight = require('./models/flight');
const Destination = require('./models/destination');

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
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('open', ( ) => console.log('mongo connected!'));
db.on('close', ( ) => console.log('mongo disconnected'));

// Create jsxViewEngine
const jsxViewEngine = require('jsx-view-engine');

// app.set('view engine and invoke jsxEngine)
app.set('view engine', 'jsx')
app.set('views', './views');
app.engine('jsx', jsxViewEngine( ));


// Middleware
// Interface between code and database calls
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next( );
});

// the urlencoded to access req.body in Post Route
// callback function
app.use(express.urlencoded( { extended: false } ) )



// Index Routes
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

// Part2: MongoDB
// Index Route: Display Destinations
// HELP: IS destinations needed for Index and NEW
// app.get('/destinations', async (req, res) => {
//     try {
//         const foundDestinations = await Destination.find({ })
//         res.status(200).render('destinations/Index', {
//            destinations:foundDestinations, 
//         });
//     } catch (err) {
//         res.status(400).send(err)
//     }
// });

// New Route
// Part2: MongoDB
app.get("/flights/new", (req, res) => {
    console.log('New controller');
    res.render("Flights/New");
})

// HELP: IS destinations needed for Index and NEW
// app.get("/destinations/new", (req, res) => {
//     console.log('New controller');
//     res.render("Destinations/New");
// })

// Delete Route
// Part2: MongoDB



// Update Route
// Part2: MongoDB
// #5: add a destination for that flight with arrival date/time & one of the established airport codes
app.put('flights/:id', async (req, res) => {
    try {
        const updatedFlight = await Flight.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true})
            res.redirect(`/flights${req.params.id}`);
    }catch(err){
        res.status(400).send(err);
    }
})






// Create Route
// Part2: MongoDB
app.post("/flights", async (req, res) => {
    try {
        req.body.myFavFlight = req.body.myFavFlight === "on";
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
//HELP!!! ISSUE WITH SHOW PATH AND details link. WILL WORK IF I HAVE SHOW OUTSIDE OF flights folder.
app.get('/flights/:id', async (req, res) => {
    try {
      const foundFlight= await Flight.findById(req.params.id)
      res.render('/flights/Show', {
        flight: foundFlight
      });
    }catch(err){
      res.status(400).send(err)
    }
  });




app.listen(PORT, ( ) =>{
    console.log(`Listening on port: ${PORT}`);
})