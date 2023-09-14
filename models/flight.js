const { Schema, model } = require('mongoose');

// HELP: Need to use destination properties by importing the destination schema?

// Flight Model with properties
// Part 2: MongoDB
// Create Airport and Destination properties (destinationSchema)
const flightSchema = new Schema(
    
    {
        airline: {
            type: String,
            enum: ['American', 'Southwest', 'United'],
            required: true,
        },
        flightNo: {
            type: Number,
            min: 10,
            max: 9999,
            required: true,
        },
        departs: {
            type: Date,
        },
        // Part 2: MongoDB
        //  Created airport and destination properties
        airport: {
            type: String,
            enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        },
        destinations: {
            type: [Schema.Types.ObjectID], ref: 'Destination',
        }

    },
    {
        timestamps: true,
    }
);

const Flight = model('Flight', flightSchema);
module.exports = Flight;