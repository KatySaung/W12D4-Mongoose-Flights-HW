const { Schema, model } = require('mongoose');

// Flight Model with properties
const flightSchema = new Schema(

// HELP: Does Airline need a required function like flightNo?
// HELP: How to include default values??

    {
        airline: {
            type: String,
            enum: ['America','Southwest', 'United'],
            

    },
        flightNo: {
            type: Number,
            min: [ 10 ],
            max: [ 9999 ],
    },
        departs: {
            type: Date,  
        }
    } 
)
const Flight = model('Flight', flightSchema)
module.exports = Flight;